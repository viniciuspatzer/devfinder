import { useState, useEffect } from 'react';

import { Header } from "./components/Header/Header";
import { OverviewProfile } from "./components/OverviewProfile/OverviewProfile";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Spinner } from './components/Spinner/Spinner';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { RepositoryList } from './components/RepositoryList/RepositoryList';

import { GlobalStyle, Container } from "./style/global";
import { GitHubData, Repository } from './public-interfaces';

export function App() {
  const [username, setUsername] = useState('octocat');
  const [usernameInput, setUsernameInput] = useState('');

  const [userData, setUserData] = useState<GitHubData>({} as GitHubData);
  const [reposData, setReposData] = useState<Repository[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);

        const userResponse = await fetch(`https://api.github.com/users/${username}`);

        if(!userResponse.ok)
          throw new Error('User not found');

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setLoading(false);
        setUserData(userData);
        setReposData(reposData);

      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    })();

  }, [username]);

  return (
    <>
    <Container>
      <Header />
      <SearchBar
        setUsername={setUsername}
        usernameInput={usernameInput}
        setUsernameInput={setUsernameInput}
      />
      {
      loading ? <Spinner /> : 
      error ? <ErrorComponent message="User not found..."/> : <OverviewProfile userData={userData}/>
      }
      {
        loading ? null :
        error ? null : <RepositoryList repositories={reposData} /> 
      }
    </Container>

    <GlobalStyle />
    </>
  );
}