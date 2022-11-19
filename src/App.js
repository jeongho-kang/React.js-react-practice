import React from "react";
import Average from "./HookTutorial/Average";

const App = () => {

    return <Average />
};

export default App;

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
