import { Content } from "./styles"

export function Spinner(){
  return(
    <Content>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Content>
  )
}