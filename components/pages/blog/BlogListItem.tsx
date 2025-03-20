import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createRipple } from "../../../lib/ripple";

const BlogListItem = ({ post }) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setViews(res.total));
  }, [post.slug]);

  const { t } = useTranslation("blog");

  const locale = useRouter().locale;

  return (
    <div>
      <Link href={`/blog/${post.slug}`} passHref>
        <a
          className="clip-rounded-pixel group relative mx-4 my-8 block cursor-pointer  select-none bg-secondary bg-opacity-50 md:flex md:justify-between"
          onPointerDown={(e) => createRipple(e)}
        >
          <div className="p-6">
            <p className="mb-2 flex justify-between text-sm text-gray">
              <span>
                📅{" "}
                {post.data.publishedOn
                  ? new Date(post.data.publishedOn).toLocaleString(locale, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "unpublished"}
              </span>
              <span>
                👀 <span className="hidden xs:inline">{t("views")}:</span>{" "}
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
              </span>
            </p>
            <p className="text-accent md:text-lg">{post.data.title}</p>
            <p className="text-sm">{post.data.description}</p>
            <span className="my-link mt-2 inline-block text-gray">
              {t("read_more")}
            </span>
          </div>
          <div className="clip-rounded-pixel relative -z-10 aspect-video md:min-h-[12rem] ltmd:w-full">
            <Image
              src={post.thumbnailPath}
              alt={post.data.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={post.thumbnailBlurDataURL}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogListItem;
