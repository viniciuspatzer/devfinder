import { Content } from "./styles";

interface ErrorProps{
  message: string;
}

export function ErrorComponent({ message }: ErrorProps){
  return(
    <Content>
      <h3>{message}</h3>
    </Content>
  )
}