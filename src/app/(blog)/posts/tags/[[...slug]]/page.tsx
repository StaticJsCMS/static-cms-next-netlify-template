import Layout from "@/components/Layout";
import TagPostList from "@/components/TagPostList";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";
import config from "@/lib/config";
import { PostContent, countPosts, listPostContent } from "@/lib/posts";
import { TagContent, getTag, listTags } from "@/lib/tags";

interface TagPostsProps {
  posts: PostContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
}

const getTagPosts = async (queries: string[]): Promise<TagPostsProps> => {
  const [slug, page] = [queries[0], queries[1]];
  const posts = listPostContent(page ? parseInt(page as string) : 1, config.posts_per_page, slug);
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  const props: {
    posts: PostContent[];
    tag: TagContent;
    pagination: { current: number; pages: number };
    page?: string;
  } = { posts, tag, pagination };

  if (page) {
    props.page = page;
  }

  return props;
};

export const generateStaticParams = async () => {
  return listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            slug: [tag.slug],
          }
        : {
            slug: [tag.slug, (page + 1).toString()],
          }
    );
  });
};

const TagPosts = async ({ params: { slug } }: { params: { slug: string[] } }) => {
  const { tag, page, posts, pagination } = await getTagPosts(slug);

  const url = `/posts/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
    </Layout>
  );
};

export default TagPosts;
