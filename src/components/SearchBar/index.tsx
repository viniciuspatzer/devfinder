import { FormEvent, useRef } from 'react';

import { Content } from './styles'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps{
  setUsername: (active: string) => void;
}

export function SearchBar({ setUsername }: SearchBarProps){
  const inputElem = useRef<HTMLInputElement>(null);

  function handleUserSearched(e: FormEvent){
    e.preventDefault();

    if(inputElem.current && inputElem.current.value)
      setUsername(inputElem.current.value);
  }

  return(
    <Content>
      <form onSubmit={handleUserSearched} autoComplete="off">
        <div>
          <FiSearch color="var(--contrast-blue)" size="30" display="hidden"/>
          <input
            id="form"
            type="text"
            placeholder="Search a GitHub username"
            ref={inputElem}
          />
        </div>
        <button type="submit">Search</button>
      </form>
  </Content>
  )
}