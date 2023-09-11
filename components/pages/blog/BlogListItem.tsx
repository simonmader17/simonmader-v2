import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="drop-shadow-pixel">
      <Link href={`/blog/${post.slug}`} passHref>
        <a
          className="clip-rounded-pixel group relative mx-4 my-8 cursor-pointer select-none bg-black bg-opacity-50 md:flex md:justify-between"
          onPointerDown={(e) => createRipple(e)}
        >
          <div className="p-6">
            <p className="mb-2 flex justify-between text-sm text-gray-400">
              <span>📅 {post.data.publishedOn || "unpublished"}</span>
              <span>
                👀 {t("views")}:{" "}
                {views || (
                  <>
                    <span className="inline-block animate-bounce">-</span>
                    <span className="animation-delay-300 inline-block animate-bounce">
                      -
                    </span>
                    <span className="animation-delay-600 inline-block animate-bounce">
                      -
                    </span>
                  </>
                )}
              </span>
            </p>
            <p className="text-red-400 md:text-lg">{post.data.title}</p>
            <p className="text-sm">{post.data.description}</p>
            <span className="my-link mt-2 inline-block text-gray-400">
              {t("read_more")}
            </span>
          </div>
          <div className="clip-rounded-pixel ltmd:w-full relative -z-10 aspect-video md:min-h-[12rem]">
            <Image
              src={post.thumbnailPath}
              alt={post.title}
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
