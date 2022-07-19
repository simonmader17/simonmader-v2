import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createRipple } from "../../../lib/ripple";

const BlogListItem = ({ post }) => {
  const router = useRouter();

  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setViews(res.total));
  }, [post.slug]);

  return (
    <div className="drop-shadow-pixel">
      <div
        onClick={() => router.push(router.pathname + "/" + post.slug)}
        className="clip-rounded-pixel relative mx-4 my-8 cursor-pointer select-none bg-black bg-opacity-50 md:flex md:justify-between"
        onPointerDown={(e) => createRipple(e)}
      >
        <div className="p-6">
          <p className="mb-2 flex justify-between text-sm text-gray-400">
            <span>📅 {post.data.publishedOn || "unpublished"}</span>
            <span>👀 Views: {views || "--"}</span>
          </p>
          <p className="text-red-400 md:text-lg">{post.data.title}</p>
          <p className="text-sm">{post.data.description}</p>
          <span className="my-link mt-2 inline-block text-gray-400">
            Read more
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
      </div>
    </div>
  );
};

export default BlogListItem;
