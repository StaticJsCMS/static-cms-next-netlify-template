import PostLayout from "@/components/PostLayout";
import { fetchPostContent } from "@/lib/posts";
import { parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { serialize } from "next-mdx-remote/serialize";

import type { PostContent } from "@/lib/posts";
import type { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

const slugToPostContent = ((postContents) => {
  let hash: Record<string, PostContent> = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

interface PostProps {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MDXRemoteSerializeResult;
}

const getPost = async (slug: string): Promise<PostProps> => {
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object },
  });
  const mdxSource = await serialize(content);
  return {
    title: data.title,
    dateString: data.date,
    slug: data.slug,
    description: "",
    tags: data.tags,
    author: data.author,
    source: mdxSource,
  };
};

export const generateStaticParams = async () => {
  return fetchPostContent().map((it) => ({ post: it.slug }));
};

const Post = async ({ params }: { params: { post: string } }) => {
  const slug = params.post;

  const { title, dateString, tags, author, description, source } = await getPost(slug);

  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
      source={source}
    />
  );
};

export default Post;
