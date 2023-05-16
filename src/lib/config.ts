import config from "../../content/config.json";

export interface Config {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: string[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
}

export default config as Config;
