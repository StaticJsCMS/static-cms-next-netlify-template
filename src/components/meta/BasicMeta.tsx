import Head from "next/head";
import config from "@/lib/config";

import type { FC } from "react";

export interface BasicMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
}

const BasicMeta: FC<BasicMetaProps> = ({ title, description, keywords, author, url }) => {
  return (
    <Head>
      <title>{title ? [title, config.site_title].join(" | ") : config.site_title}</title>
      <meta name="description" content={description ? description : config.site_description} />
      <meta
        name="keywords"
        content={keywords ? keywords.join(",") : config.site_keywords.join(",")}
      />
      {author ? <meta name="author" content={author} /> : null}
      <link rel="canonical" href={config.base_url + url} />
    </Head>
  );
};

export default BasicMeta;
