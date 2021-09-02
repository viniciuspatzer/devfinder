import { useState, useEffect } from 'react'

import { TopHeader } from './styles'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

export function Header(){
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');

    return localTheme ? localTheme : 'DARK';
  });

  useEffect(() => {
    const root = document.documentElement.style;

    if (theme === 'LIGHT'){
      root.setProperty('--background', '#F6F8FF');
      root.setProperty('--content-bg', '#FEFEFE');
      root.setProperty('--text-title', '#2B3442');
      root.setProperty('--text-body', '#4B6A9B');
    }
    
    else if (theme === 'DARK'){
      root.setProperty('--background', '#141C2F');
      root.setProperty('--content-bg', '#1E2A47');
      root.setProperty('--text-title', '#FFFFFF');
      root.setProperty('--text-body', '#FFFFFF');
    }
    localStorage.setItem('theme', theme);

  }, [theme]);

  return(
    <TopHeader>

      <a href="https://devfinder-viniciuspatzer.netlify.app/">
        devfinder
      </a>
      <div onClick={() => {setTheme(theme === 'DARK' ? 'LIGHT' : 'DARK')}}>
        <h3>
          {theme === 'DARK' ? 'LIGHT' : 'DARK'}
        </h3>
        {theme === 'DARK' ?
        <RiSunFill color="white" size="20"/> : <RiMoonFill color="grey" size="20"/>}
      </div>

    </TopHeader>
  )
}