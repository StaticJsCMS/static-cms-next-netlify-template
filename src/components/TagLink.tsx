import Link from "next/link";

import type { TagContent } from "@/lib/tags";
import type { FC } from "react";

export interface TagProps {
  tag: TagContent;
}

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      {"#" + tag.name}
    </Link>
  );
};

export default Tag;
