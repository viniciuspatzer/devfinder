import { Content } from './styles'
import { FiSearch } from 'react-icons/fi'

export function SearchBar(){
  return(
    <Content>
      <form>
        <div>
          <FiSearch color="var(--contrast-blue)" size="30" display="hidden"/>
          <input
            type="text"
            placeholder="Search a GitHub username..."
          />
        </div>
        <button type="submit">Search</button>
      </form>
  </Content>
  )
}