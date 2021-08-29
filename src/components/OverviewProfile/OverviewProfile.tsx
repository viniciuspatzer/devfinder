import { Content, ProfileHeader, ProfileStats, ProfileBottom } from "./styles";
import { GitHubData } from '../../interfaces';

interface OverviewProfileProps{
  userData: GitHubData;
}

export function OverviewProfile({ userData }: OverviewProfileProps){
  return (
    <Content>

      <ProfileHeader>
        <img src={userData.avatar_url} alt="profile img" />
        <div>
          <h1>{userData.name}</h1>
          <span>@{userData.login}</span>
          <p>
            Joined at {userData.created_at ? new Intl.DateTimeFormat(navigator.language)
            .format(new Date(userData.created_at)) : ''}
          </p>
        </div>
      </ProfileHeader>

      <p className="bio">
        {userData.bio ? userData.bio : 'The user has no bio'}
      </p>

      <ProfileStats>
        <div>
          <p>Repos</p>
          <span>{userData.public_repos}</span>
        </div>
        <div>
          <p>Followers</p>
          <span>{userData.followers}</span>
        </div>
        <div>
          <p>Following</p>
          <span>{userData.following}</span>
        </div>
      </ProfileStats>

      <ProfileBottom>

        <div className={userData.location ? '' : 'unavailable'}>
          <i className="fas fa-map-marker-alt"></i>
          <p>
            {userData.location ? userData.location : 
            'Not available'}
          </p>
        </div>

        <div className={userData.twitter_username ? '' : 'unavailable'}>
          <i className="fab fa-twitter"></i>
          <p>
            {userData.twitter_username ? userData.twitter_username : 
            'Not available'}
          </p>
        </div>

        <div className={userData.company ? '' : 'unavailable'}>
          <i className="fas fa-building"></i>
          <p>
            {userData.company ? userData.company : 
            'Not available'}
          </p>
        </div>

        <div className={userData.blog ? '' : 'unavailable'}>
          <i className="fas fa-link"></i>
          {userData.blog ? 
          <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a>
          :
          <p>Not available</p>}
        </div>

      </ProfileBottom>

    </Content>
  )
}