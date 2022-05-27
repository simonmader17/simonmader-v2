import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Container from "../../components/Container";
import { useRouter } from "next/router";
import { createRipple } from "../../lib/ripple";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const postsFiles = fs.readdirSync(
    path.join(process.cwd(), "/components/pages/blog/posts")
  );

  const promises = postsFiles.map(async (post) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "/components/pages/blog/posts", post)
    );

    const { data } = matter(source);

    const slug = post.replace(".mdx", "");

    const thumbnailPath = "/images/blog/posts/" + slug + "/" + data.thumbnail;
    const thumbnailBlurDataURL = await (
      await getPlaiceholder(thumbnailPath)
    ).base64;

    return { data, slug, thumbnailPath, thumbnailBlurDataURL };
  });
  const posts = (await Promise.all(promises)).sort((a, b) => {
    if (a.data.publishedOn < b.data.publishedOn) return 1;
    return -1;
  });

  return { props: { posts } };
}

const Blog = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Blog</title>
        <meta name="description" content="Simon Mader's not too busy blog..." />
      </Head>

      <Container className="ltmd:mt-20">
        <h1>Simon Mader&apos;s Blog ✍️</h1>

        <p>Don&apos;t expect regular content here...</p>

        {posts.map((post) => (
          <div key={post.slug} className="drop-shadow-pixel">
            <div
              onClick={() => router.push(router.pathname + "/" + post.slug)}
              className="clip-rounded-pixel relative m-4 cursor-pointer select-none bg-black bg-opacity-50 md:flex md:justify-between"
              onPointerDown={(e) => createRipple(e)}
            >
              <div className="p-6">
                <p className="text-sm text-gray-400">{post.data.publishedOn}</p>
                <p className="text-red-400 md:text-lg">{post.data.title}</p>
                <p className="text-sm">{post.data.description}</p>
              </div>
              <div className="clip-rounded-pixel ltmd:w-full relative -z-10 aspect-video md:h-48">
                <Image
                  src={post.thumbnailPath}
                  alt={post.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={post.thumbnailBlurDataURL}
                />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Blog;
