import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Container from "../../components/Container";
import { useRouter } from "next/router";
import { createRipple } from "../../lib/ripple";

export async function getStaticProps() {
  const postsFiles = fs.readdirSync(
    path.join(process.cwd(), "/components/pages/blog/posts")
  );

  const posts = postsFiles
    .map((post) => {
      const source = fs.readFileSync(
        path.join(process.cwd(), "/components/pages/blog/posts", post)
      );

      const { data } = matter(source);

      const slug = post.replace(".mdx", "");

      return { data, slug };
    })
    .sort((a, b) => {
      if (a.data.publishedOn < b.data.publishedOn) return 1;
      return -1;
    });

  console.log(posts);

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

        <p>Please do not expect regular content here...</p>

        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => router.push(router.pathname + "/" + post.slug)}
            className="clip-rounded-pixel relative m-4 cursor-pointer select-none bg-black bg-opacity-50 p-6"
            onPointerDown={(e) => createRipple(e)}
          >
            <p className="text-sm text-gray-400">{post.data.publishedOn}</p>
            <p className="text-red-400 md:text-lg">{post.data.title}</p>
            <p className="text-sm">{post.data.description}</p>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Blog;
