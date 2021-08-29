import { Content, ProfileHeader, ProfileStats, ProfileBottom } from "./styles";

export function OverviewProfile(){
  return (
    <Content>

      <ProfileHeader>
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="profile img" />
        <div>
          <h1>The Octocat</h1>
          <span>@octocat</span>
          <p>Joined 25 Jan 2011</p>
        </div>
      </ProfileHeader>

      <p className="bio">This profile has no bio</p>

      <ProfileStats>
        <div>
          <p>Repos</p>
          <span>8</span>
        </div>
        <div>
          <p>Followers</p>
          <span>3946</span>
        </div>
        <div>
          <p>Following</p>
          <span>30</span>
        </div>
      </ProfileStats>

      <ProfileBottom>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>San Francisco</p>
        </div>
        <div>
          <i className="fas fa-link"></i>
          <a href="google.com">https://github.blog</a>
        </div>
        <div>
          <i className="fab fa-twitter"></i>
          <p>Not available</p>
        </div>
        <div>
          <i className="fas fa-building"></i>
          <p>@github</p>
        </div>
      </ProfileBottom>

    </Content>
  )
}