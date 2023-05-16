import Pagination from "./Pagination";
import PostItem from "./PostItem";

import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";
import type { FC } from "react";

export interface TagPostListProps {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
}

const TagPostList: FC<TagPostListProps> = ({ posts, tag, pagination }) => {
  return (
    <div className="my-0 mx-auto w-full py-0 px-6 flex flex-col">
      <h1 className="mr-8 p-0 font-thin text-3xl text-gray-400 md:text-4xl">
        All posts / <span className="font-bold text-gray-800">{tag.name}</span>
      </h1>
      <ul className="m-0 p-0 flex-[1_0_auto]">
        {posts.map((it, i) => (
          <li key={i} className="mb-7">
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/posts/tags/[[...slug]]",
          as: (page) => (page === 1 ? "/posts/tags/" + tag.slug : `/posts/tags/${tag.slug}/${page}`),
        }}
      />
    </div>
  );
};

export default TagPostList;
