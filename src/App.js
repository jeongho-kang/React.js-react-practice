import React, { Component } from "react";
//import IterationSample from "./practice/IterationSample";
// import ScrollBox from './practice/ScrollBox';
import LifeCycleSample from "./practice/LifeCycleSample";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}


class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color : getRandomColor()
    })
  }

  render() {
    return (
      /*<div>
       <ScrollBox ref={(ref) => {this.ScrollBox=ref}}/>
       <button onClick={() => this.ScrollBox.ScrollToBottom()}>맨 밑으로</button>
    </div>*/
      <>
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color} />
        </div>
      </>
    );
  }
}
export default App;
