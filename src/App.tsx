import { useState, useEffect } from 'react';

import { Header } from "./components/Header";
import { OverviewProfile } from "./components/OverviewProfile";
import { SearchBar } from "./components/SearchBar";
import { Spinner } from './components/Spinner';
import { ErrorComponent } from './components/Error';
import { RepositoryList } from './components/RepositoryList';

import { GlobalStyle, Container } from "./style/global";
import { GitHubData, Repository } from './public-interfaces';

export function App() {
  const [username, setUsername] = useState('octocat');

  const [userData, setUserData] = useState<GitHubData>({} as GitHubData);
  const [repositoriesData, setRepositoriesData] = useState<Repository[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const userResponse = await fetch(`https://api.github.com/users/${username}`);

        if(!userResponse.ok)
          throw new Error('User not found');

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setIsLoading(false);
        setUserData(userData);
        setRepositoriesData(reposData);

      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(true);
      }
    })();
  }, [username]);

  return (

    <Container>
      <Header />
      <SearchBar setUsername={setUsername} />
      {
      isLoading ? <Spinner /> : 
      error ? <ErrorComponent message="User not found..."/> : <OverviewProfile userData={userData}/>
      }
      {
        isLoading ? null :
        error ? null : <RepositoryList repositories={repositoriesData} /> 
      }
      
      <GlobalStyle />
    </Container>
  );
}