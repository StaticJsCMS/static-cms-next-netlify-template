import Twitter from "@/assets/twitter-alt.svg";
import GitHub from "@/assets/github-alt.svg";
import config from "@/lib/config";

import type { FC } from "react";

const SocialList: FC = () => {
  return (
    <div>
      <a title="Twitter" href={`https://twitter.com/${config.twitter_account}`} target="_blank" rel="noopener" className="inline-block mr-8">
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a title="GitHub" href={`https://github.com/${config.github_account}`} target="_blank" rel="noopener" className="inline-block">
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
    </div>
  );
};

export default SocialList;
