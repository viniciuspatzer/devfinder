export interface GitHubData{
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

export interface Repository{
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}