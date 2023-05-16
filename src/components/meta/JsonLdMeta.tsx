import config from "@/lib/config";
import { formatISO } from "date-fns";
import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import { BlogPosting } from "schema-dts";

import type { FC } from "react";

export interface JsonLdMetaProps {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  image?: string;
  description?: string;
}

const JsonLdMeta: FC<JsonLdMetaProps> = ({ url, title, keywords, date, author, image, description }) => {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: (keywords ?? []).join(","),
          datePublished: formatISO(date),
          author: author,
          image: image,
          description: description,
        })}
      />
    </Head>
  );
};

export default JsonLdMeta;
