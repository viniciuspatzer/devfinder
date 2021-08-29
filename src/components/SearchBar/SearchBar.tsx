import { FormEvent } from 'react';
import { Content } from './styles'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps{
  setUsername: (active: string) => void;
  usernameInput: string;
  setUsernameInput: (active: string) => void;
}

export function SearchBar({ setUsername, usernameInput, setUsernameInput }: SearchBarProps){

  function handleUserSearched(e: FormEvent){
    e.preventDefault();

    if(usernameInput.length > 0)
      setUsername(usernameInput);
  }

  return(
    <Content>
      <form onSubmit={handleUserSearched}>
        <div>
          <FiSearch color="var(--contrast-blue)" size="30" display="hidden"/>
          <input
            id="form"
            type="text"
            placeholder="Search a GitHub username"
            value={usernameInput}
            onChange={(e) => {setUsernameInput(e.target.value)}}
          />
        </div>
        <button type="submit">Search</button>
      </form>
  </Content>
  )
}