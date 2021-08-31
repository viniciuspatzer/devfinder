import { Content } from "./styles"
import { Repository } from "../../public-interfaces"

interface RepositoryItemProps{
  repository: Repository;
}

export function RepositoryItem({ repository }: RepositoryItemProps){
  return(
    <Content>
      <h3>{repository.name}</h3>
      <p>{repository.description ? repository.description : 'No description'}</p>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">Access repository</a>
      <div>
        <span>{repository.stargazers_count}</span>
        <i className="fas fa-star"></i>
      </div>
    </Content>
  )
}