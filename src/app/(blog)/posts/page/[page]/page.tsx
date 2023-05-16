import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";
import config from "@/lib/config";
import { countPosts, listPostContent } from "@/lib/posts";
import { listTags } from "@/lib/tags";

import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";

interface PageProps {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
}

const getPage = async (page: number): Promise<PageProps> => {
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    page,
    posts,
    tags,
    pagination,
  };
};

export const generateStaticParams = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  return Array.from(Array(pages - 1).keys()).map((it) => ({
    page: (it + 2).toString(),
  }));
};

const Page = async ({ params }: { params: { page: number } }) => {
  const { posts, tags, pagination, page } = await getPage(params.page);

  const url = `/posts/page/${page}`;
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
};

export default Page;
