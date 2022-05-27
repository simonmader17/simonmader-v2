import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Container from "../../components/Container";
import rehypeHighlight from "rehype-highlight";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

export async function getStaticPaths() {
  const posts = fs.readdirSync(
    path.join(process.cwd(), "/components/pages/blog/posts")
  );

  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postSource = fs.readFileSync(
    path.join(process.cwd(), `/components/pages/blog/posts/${slug}.mdx`)
  );
  const { content, data } = matter(postSource);

  const thumbnailPath = "/images/blog/posts/" + slug + "/" + data.thumbnail;
  const thumbnailBlurDataURL = await (
    await getPlaiceholder(thumbnailPath)
  ).base64;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      post: { source: mdxSource, data, thumbnailPath, thumbnailBlurDataURL },
    },
  };
}

const Post = ({ post }) => {
  const { source, data, thumbnailPath, thumbnailBlurDataURL } = post;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </Head>

      <Container className="ltmd:mt-20">
        Published on: {data.publishedOn}
        <h1 className="mt-5 text-center md:mt-10">{data.title}</h1>
        <div className="drop-shadow-pixel relative mx-auto mb-5 aspect-video w-full py-4 md:mb-10 md:w-2/3">
          <Image
            src={thumbnailPath}
            alt={data.title}
            layout="fill"
            placeholder="blur"
            blurDataURL={thumbnailBlurDataURL}
            className="clip-rounded-pixel"
          />
        </div>
        <p className="mb-5 text-center text-gray-400 md:mb-10">
          {data.description}
        </p>
        <MDXRemote {...source} />
      </Container>
    </>
  );
};

export default Post;