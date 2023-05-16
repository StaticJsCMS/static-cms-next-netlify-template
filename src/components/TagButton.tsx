import Link from "next/link";

import type { TagContent } from "@/lib/tags";
import type { FC } from "react";

export interface TagButtonProps {
  tag: TagContent;
}

const TagButton: FC<TagButtonProps> = ({ tag }) => {
  if (!tag) {
    return null;
  }

  return (
    <>
      <Link
        href={"/posts/tags/[[...slug]]"}
        as={`/posts/tags/${tag.slug}`}
        className="
          inline-block
          rounded-[3px]
          bg-[rgba(21_132_125_0.2)]
          color-[#15847d]
          transition-colors
          py-1
          px-2
          active:bg-[rgba(21_132_125_0.4)]
          hover:bg-[rgba(21_132_125_0.4)]
        "
      >
        {tag.name}
      </Link>
    </>
  );
};

export default TagButton;
