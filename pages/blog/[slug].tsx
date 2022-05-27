import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Container from "../../components/Container";
import rehypeHighlight from "rehype-highlight";

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

  console.log(data);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  });

  return { props: { post: { source: mdxSource, data } } };
}

const Post = ({ post }) => {
  const { source, data } = post;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
      </Head>

      <Container className="ltmd:mt-20">
        Published on: {data.publishedOn}
        <h1 className="my-5 text-center md:my-10">{data.title}</h1>
        <p>{data.description}</p>
        <MDXRemote {...source} />
      </Container>
    </>
  );
};

export default Post;
