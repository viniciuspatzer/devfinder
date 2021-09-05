import { useState, useEffect } from 'react';

import { Header } from "./components/Header";
import { OverviewProfile } from "./components/OverviewProfile";
import { SearchBar } from "./components/SearchBar";
import { Spinner } from './components/Spinner';
import { ErrorComponent } from './components/Error';
import { RepositoryList } from './components/RepositoryList';

import { GlobalStyle, Container } from "./style/global";
import { GitHubData, Repository } from './public-interfaces';
import { getJSON } from './helpers';

export function App() {
  const [username, setUsername] = useState('octocat');

  const [userData, setUserData] = useState<GitHubData>({} as GitHubData);
  const [repositoriesData, setRepositoriesData] = useState<Repository[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError('');

        const [userData, reposData] = await Promise.all([
          getJSON(`https://api.github.com/users/${username}`, 'Something went wrong'),
          getJSON(`https://api.github.com/users/${username}/repos`, 'Something went wrong')
        ]);

        setUserData(userData);
        setRepositoriesData(reposData);

      } catch (error: any) {
        console.error(error);
        setError(error.message)
      }
      setIsLoading(false);
    })(); 

  }, [username]);

  return (
    <Container>
      <Header />
      <SearchBar setUsername={setUsername} />
      {
      isLoading ? <Spinner /> : 
      error ? <ErrorComponent message={error}/> : <OverviewProfile userData={userData}/>
      }
      {
        !isLoading && !error && <RepositoryList repositories={repositoriesData} />
      }
      <GlobalStyle />
    </Container>
  );
}