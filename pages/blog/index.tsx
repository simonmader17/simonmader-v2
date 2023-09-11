import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Container from "../../components/Container";
import { getPlaiceholder } from "plaiceholder";
import BlogListItem from "../../components/pages/blog/BlogListItem";
import useTranslation from "next-translate/useTranslation";

export async function getStaticProps({ locale }) {
  const postsFiles = fs.readdirSync(
    path.join(process.cwd(), "/components/pages/blog/posts", locale)
  );

  const promises = postsFiles.map(async (post) => {
    const source = fs.readFileSync(
      path.join(
        process.cwd(),
        "/components/pages/blog/posts",
        locale,
        post.endsWith(".mdx") ? post : `${post}/${post}.mdx`
      )
    );

    const { data } = matter(source);

    const slug = post.replace(".mdx", "");

    const thumbnailPath = `/images/blog/posts/${slug}/${data.thumbnail}`;
    const thumbnailBlurDataURL = await (
      await getPlaiceholder(thumbnailPath, { size: 64 })
    ).base64;

    return { data, slug, thumbnailPath, thumbnailBlurDataURL };
  });
  const posts = (await Promise.all(promises))
    .sort((a, b) => {
      if (a.data.publishedOn < b.data.publishedOn) return 1;
      return -1;
    })
    .filter(
      (post) =>
        post.data.publishedOn != null || process.env.NODE_ENV != "production"
    );

  return { props: { posts } };
}

const BlogPage = ({ posts }) => {
  const { t } = useTranslation("blog");

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Blog</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content="Simon Mader's Blog" />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/simonmader17.png"
        />
        <meta property="og:url" content="https://simonmader.at/blog" />
      </Head>

      <Container className="ltmd:mt-20">
        <h1>Simon Mader&apos;s Blog ✍️</h1>

        <p>{t("description")}</p>

        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </Container>
    </>
  );
};

export default BlogPage;
