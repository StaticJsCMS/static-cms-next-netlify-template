'use client';

import { getAuthor } from "@/lib/authors";
import { getTag } from "@/lib/tags";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import SocialList from "./SocialList";
import TagButton from "./TagButton";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";

import type { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import type { FC } from "react";

export interface PostLayoutProps {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MDXRemoteSerializeResult;
}

const PostLayout: FC<PostLayoutProps> = ({ title, date, slug, author, tags, description = "", source }) => {
  const keywords = tags.map((it) => getTag(it)?.name).filter(Boolean);
  const authorName = getAuthor(author)?.name;
  return (
    <Layout>
      <BasicMeta url={`/posts/${slug}`} title={title} keywords={keywords} description={description} />
      <TwitterCardMeta url={`/posts/${slug}`} title={title} description={description} />
      <OpenGraphMeta url={`/posts/${slug}`} title={title} description={description} />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className="block max-w-[36rem] w-full my-0 mx-auto py-0 px-6 box-border z-0 md:flex md:flex-col">
        <article className="flex-[1_0_auto]">
          <header>
            <h1 className="mb-2 text-4xl">{title}</h1>
            <div>
              <div className="inline-block mr-2">
                <Date date={date} />
              </div>
              <div className="inline-block mr-2">
                <Author author={getAuthor(author)} />
              </div>
            </div>
          </header>
          <div className={styles.content}>{<MDXRemote {...source} />}</div>
          <ul className="text-right mt-7 p-0">
            {tags.map((it, i) => (
              <li key={i} className="inline-block ml-2">
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <div className="mt-12 text-center">
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
    </Layout>
  );
};

export default PostLayout;
