import React , {Component} from "react";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return(
      <div>
        <CSSModule />
      </div>
    )
  }
}

export default App


/* 숨기기 보이기
const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>{visible? '숨기기' : '보이기' }</button>
      <hr/>
      {visible && <useReducerInfo/>}
*/
