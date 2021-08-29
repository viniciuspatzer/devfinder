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