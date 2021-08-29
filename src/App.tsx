import { Header } from "./components/Header/Header";
import { OverviewProfile } from "./components/OverviewProfile/OverviewProfile";
import { SearchBar } from "./components/SearchBar/SearchBar";

import { GlobalStyle, Container } from "./style/global";


export function App() {
  return (
    <>
    <Container>
      <Header />
      <SearchBar />
      <OverviewProfile />
    </Container>

    <GlobalStyle />
    </>
  );
}