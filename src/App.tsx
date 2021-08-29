import { useState, useEffect } from 'react';
import { Header } from "./components/Header/Header";
import { OverviewProfile } from "./components/OverviewProfile/OverviewProfile";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { GlobalStyle, Container } from "./style/global";
import { GitHubData } from './interfaces';
import { Spinner } from './components/Spinner/Spinner';
import { ErrorComponent } from './components/Error/ErrorComponent';

export function App() {
  const [username, setUsername] = useState('octocat');
  const [usernameInput, setUsernameInput] = useState('');

  const [userData, setUserData] = useState<GitHubData>({} as GitHubData);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`https://api.github.com/users/${username}`);
        if(!res.ok) throw new Error('User not found');
        const data = await res.json();
        setLoading(false);
        setUserData(data);

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
    </Container>

    <GlobalStyle />
    </>
  );
}