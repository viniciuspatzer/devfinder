import { RepositoryItem } from "../RepositoryItem"

import { Content } from "./styles"
import { Repository } from '../../public-interfaces.js'

interface RepositoryListProps{
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps){

  return(
    <Content>
      {repositories.map(repository => 
        <RepositoryItem  repository={repository} key={repository.html_url}/>
      )}
    </Content>
  )
}