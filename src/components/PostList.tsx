import Pagination from "./Pagination";
import PostItem from "./PostItem";
import TagLink from "./TagLink";

import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";
import type { FC } from "react";

export interface PostListProps {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
}

const PostList: FC<PostListProps> = ({ posts, tags, pagination }) => {
  return (
    <div className="flex my-0 mx-auto max-w-[1200px] w-full py-0 px-6">
      <div className="flex flex-col flex-auto">
        <ul className="flex-[1_0_auto]">
          {posts.map((it, i) => (
            <li key={i} className="mb-6">
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? "" : "/posts/page/" + page),
          }}
        />
      </div>
      <ul className="hidden md:block">
        {tags.map((it, i) => (
          <li key={i} className="mb-3">
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
