import { useState } from 'react'
import { TopHeader } from './styles'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

export function Header(){

  const [theme, setTheme] = useState('dark')

  function toggleDarkMode(){
    const root = document.documentElement.style;

    if(theme === 'dark'){
      root.setProperty('--background', '#F6F8FF');
      root.setProperty('--content-bg', '#FEFEFE');
      root.setProperty('--text-title', '#2B3442');
      root.setProperty('--text-body', '#4B6A9B');
      setTheme('light');
    }
    
    else{
      root.setProperty('--background', '#141C2F');
      root.setProperty('--content-bg', '#1E2A47');
      root.setProperty('--text-title', '#FFFFFF');
      root.setProperty('--text-body', '#FFFFFF');
      setTheme('dark');
    }
  }

  return(
    <TopHeader>
      <a href={window.location.href}>devfinder</a>
      <div onClick={toggleDarkMode}>
        <h3>{theme === 'dark' ? 'LIGHT' : 'DARK'}</h3>
        {theme === 'dark' ? <RiSunFill color="white" size="20"/> : <RiMoonFill color="grey" size="20"/>}
      </div>
    </TopHeader>
  )
}