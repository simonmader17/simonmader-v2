import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Container from "../../components/Container";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import sizeOf from "image-size";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale) => {
    const posts = fs.readdirSync(
      path.join(process.cwd(), "/components/pages/blog/posts", locale)
    );

    posts.forEach((post) => {
      const slug = post.replace(".mdx", "");
      const postPath = fs.existsSync(
        path.join(
          process.cwd(),
          `/components/pages/blog/posts/${locale}/${slug}.mdx`
        )
      )
        ? path.join(
            process.cwd(),
            `/components/pages/blog/posts/${locale}/${slug}.mdx`
          )
        : path.join(
            process.cwd(),
            `/components/pages/blog/posts/${locale}/${slug}/${slug}.mdx`
          );
      const postSource = fs.readFileSync(postPath);
      const { data } = matter(postSource);

      if (data.publishedOn == null && process.env.NODE_ENV === "production")
        return;

      paths.push({
        params: {
          slug: slug,
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

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const postPath = fs.existsSync(
    path.join(
      process.cwd(),
      `/components/pages/blog/posts/${locale}/${slug}.mdx`
    )
  )
    ? path.join(
        process.cwd(),
        `/components/pages/blog/posts/${locale}/${slug}.mdx`
      )
    : path.join(
        process.cwd(),
        `/components/pages/blog/posts/${locale}/${slug}/${slug}.mdx`
      );
  const postSource = fs.readFileSync(postPath);
  const { content, data } = matter(postSource);

  const thumbnailPath = "/images/blog/posts/" + slug + "/" + data.thumbnail;
  const thumbnailBlurDataURL = await (
    await getPlaiceholder(thumbnailPath, { size: 64 })
  ).base64;

  const otherImages = fs
    .readdirSync(path.join(process.cwd(), "/public/images/blog/posts/" + slug))
    .filter((image) => image.toString() != data.thumbnail)
    .map((image) => "/images/blog/posts/" + slug + "/" + image);
  const otherImagesData = {};
  otherImages.forEach(async (image) => {
    otherImagesData[image] = {};
    otherImagesData[image].blurDataURL = await (
      await getPlaiceholder(image, {
        size: 64,
      })
    ).base64;
    const dimensions = sizeOf(path.join(process.cwd(), "public", image));
    otherImagesData[image].dimensions = dimensions;
  });

  const result = await bundleMDX({
    source: content,
    cwd: path.dirname(postPath),
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
        remarkGfm,
      ];

      return options;
    },
    globals: { motion: "motion" },
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
        otherImagesData,
      },
    },
  };
}

const Post = ({ post }) => {
  const {
    slug,
    code,
    data,
    thumbnailPath,
    thumbnailBlurDataURL,
    otherImagesData,
  } = post;

  const MDXComponent = useMemo(
    () => getMDXComponent(code, { motion: motion }),
    [code]
  );

  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => setViews(res.total));
  }, [slug]);

  const { t } = useTranslation("blog");

  const locale = useRouter().locale;

  const animateProgressBar = () => {
    const bodyRect = document.body.getBoundingClientRect();
    const scrollDistance = -bodyRect.top;
    const fullDistance = bodyRect.height - window.innerHeight;
    const progressBar = document.querySelector(
      "#progress-bar"
    ) as HTMLDivElement;
    const progressWidth = (scrollDistance / fullDistance) * 100;
    progressBar.style.width = `${progressWidth}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", animateProgressBar);
    return () => window.removeEventListener("scroll", animateProgressBar);
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://simonmader.at${thumbnailPath}`}
        />
        <meta
          property="og:url"
          content={`https://simonmader.at/blog/${slug}`}
        />
      </Head>

      <div
        id="progress-bar"
        className="fixed top-0 left-0 z-50 h-1 bg-accent bg-gradient-to-br drop-shadow md:h-2"
        style={{
          width: "0%",
        }}
      ></div>

      <Container className="ltmd:mt-20">
        <h1 className="mt-5 text-center drop-shadow-pixel-sm md:mt-10">
          {data.title}
        </h1>

        <div className="my-5 grid grid-cols-1 gap-2 md:my-10 md:grid-cols-3 md:place-items-center">
          <div className="my-2 flex items-center gap-2 drop-shadow-pixel-sm">
            <div className="relative m-2 h-16 w-16">
              <Image
                src="https://github.com/simonmader17.png"
                alt="Simon Mader"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                // placeholder="blur"
                className="clip-rounded-pixel"
              />
            </div>
            <div>
              <p className="font-bold">Simon Mader</p>
              <span className="flex">
                <a
                  href="https://github.com/simonmader17"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:font-bold hover:text-github focus:text-github"
                >
                  <span className={`icon-github-white m-1`} />
                  simonmader17
                </a>
              </span>
            </div>
          </div>
          <p className="md:text-center">
            📅 {t("published_on")}:{" "}
            {data.publishedOn
              ? new Date(data.publishedOn).toLocaleString(locale, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "unpublished"}
          </p>
          <p>
            👀 {t("views")}:{" "}
            {views || (
              <>
                <span className="inline-block animate-bounce">-</span>
                <span className="inline-block animate-bounce animation-delay-300">
                  -
                </span>
                <span className="inline-block animate-bounce animation-delay-600">
                  -
                </span>
              </>
            )}
          </p>
        </div>

        <div className="mx-auto xl:max-w-[1024px]">
          <div className="relative mx-auto mb-5 aspect-video w-full py-4 drop-shadow-pixel md:mb-10">
            <Image
              src={thumbnailPath}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={thumbnailBlurDataURL}
              className="clip-rounded-pixel"
            />
          </div>
          <p className="mb-5 text-center text-gray md:mb-10">
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
                img: ({ ...props }) => {
                  const { src, alt } = props;
                  return (
                    <div className="mx-auto mb-5 flex aspect-video w-full justify-center py-4 drop-shadow-pixel md:mb-10">
                      <div
                        className="relative h-full"
                        style={{
                          aspectRatio: `${otherImagesData[src].dimensions.width}/${otherImagesData[src].dimensions.height}`,
                        }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          placeholder="blur"
                          blurDataURL={otherImagesData[src].blurDataURL}
                          className="clip-rounded-pixel"
                        />
                      </div>
                    </div>
                  );
                },
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Post;
