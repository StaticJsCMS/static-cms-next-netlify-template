import type { AuthorContent } from "@/lib/authors";
import type { FC } from "react";

export interface AuthorProps {
  author: AuthorContent;
}

const Author: FC<AuthorProps> = ({ author }) => {
  return <span className="text-gray-400">{author?.name}</span>;
};

export default Author;
