import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Container from "../../components/Container";
import rehypeHighlight from "rehype-highlight";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect, useMemo, useState } from "react";

import author from "../../public/images/personal_images/ich_2.jpeg";

export async function getStaticPaths({ locales }) {
  const posts = fs.readdirSync(
    path.join(process.cwd(), "/components/pages/blog/posts")
  );

  const paths = [];

  locales.forEach((locale) => {
    posts.forEach((post) => {
      paths.push({
        params: {
          slug: post.replace(".mdx", ""),
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postPath = fs.existsSync(
    path.join(process.cwd(), `/components/pages/blog/posts/${slug}.mdx`)
  )
    ? path.join(process.cwd(), `/components/pages/blog/posts/${slug}.mdx`)
    : path.join(
        process.cwd(),
        `/components/pages/blog/posts/${slug}/${slug}.mdx`
      );
  const postSource = fs.readFileSync(postPath);
  const { content, data } = matter(postSource);

  const thumbnailPath = "/images/blog/posts/" + slug + "/" + data.thumbnail;
  const thumbnailBlurDataURL = await (
    await getPlaiceholder(thumbnailPath, { size: 64 })
  ).base64;

  const result = await bundleMDX({
    source: content,
    cwd: path.dirname(postPath),
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];

      return options;
    },
  });

  const { code } = result;

  return {
    props: {
      post: {
        slug,
        code,
        data,
        thumbnailPath,
        thumbnailBlurDataURL,
      },
    },
  };
}

const Post = ({ post }) => {
  const { slug, code, data, thumbnailPath, thumbnailBlurDataURL } = post;

  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => setViews(res.total));
  }, [slug]);

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
        <h1 className="drop-shadow-pixel-sm mt-5 text-center md:mt-10">
          {data.title}
        </h1>

        <div className="my-5 grid grid-cols-1 gap-2 md:my-10 md:grid-cols-3 md:place-items-center">
          <div className="drop-shadow-pixel-sm my-2 flex items-center gap-2">
            <div className="relative m-2 h-16 w-16">
              <Image
                src={author}
                alt="Simon Mader"
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                className="clip-rounded-pixel"
              />
            </div>
            <div>
              <p className="font-bold">Simon Mader</p>
              <p>
                <a
                  href="https://github.com/simonmader17"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-github-white m-1" />
                  simonmader17
                </a>
              </p>
            </div>
          </div>
          <p>📅 Published on: {data.publishedOn}</p>
          <p>👀 Views: {views || "--"}</p>
        </div>

        <div className="drop-shadow-pixel relative mx-auto mb-5 aspect-video w-full py-4 md:mb-10">
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
        <div id="blog-post-content">
          <MDXComponent
            components={{
              a: ({ ...props }) => (
                <a
                  className="my-link"
                  target="_blank"
                  rel="noreferrer"
                  {...props}
                >
                  {props.children}
                </a>
              ),
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Post;
