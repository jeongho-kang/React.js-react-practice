import React, {Component} from "react";

/*
    각 라이프사이클 메서드를 실행할 때마다 console.log에 기록하고,
    부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더한다.
    getDerivedStateProps는 부모에게 받은 color 값을 state에 동기화 한다.
    그리고 getSnapshotBeforeUpdate는 Dom에서 변화가 일어나기 직전에
    색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조회할수 있게 한다.
    shouldComponentUpdate 메서드에서 state.number 값의 마지막 자리 수가 4이면
    리렌더링을 취소하도록 설정한다.
*/

class LifeCycleSample extends Component {
    state = {
        number:0,
        color : null,
    }

    myref = null // ref를 설정할 부분

    constructor(props) {
        super(props)
        console.log("constructor")
        // 컴포넌트의 생성자 메소드로 컴포넌트를 만들 때 처음으로 실행 된다.
        // 초기 state를 정할 수 있음
    }
    // props로 받아 온 값을 state에 동기화 시키는 용도로 사용
    //컴포넌트가 마운트 될 때와 업데이트 될 때 호출된다.
    static getDerivedStateFromProps(nextProps,prevState) {
        console.log("getDerivedStateFromProps")
        if(nextProps.color !== prevState.color) { // 조건에 따라 특저값을 동기화 함
            return {color:nextProps.color}
        }
        return null // state를 변경할 필요가 없다면 null을 반환
    }
    componentDidMount() { // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행된다.
        console.log("componentDidMount")
    }
    shouldComponentUpdate(nextProps, nextState) { // props와 state를 변경했을 때 리렌더링을 실시할지 여부를 지정하는 메소드
        console.log("shouldComponentUpdate", nextProps, nextState)
        return nextState.number % 10 !== 4 
        // 숫자의 마지막 4면 렌더링 하지 않는다.
    }
    componentWillUnmount() { // 컴포넌트를 DOM에서 제거할 때 실행되는 메소드
        // componentDidmount에서 등록한 이벤트,타이머 직접 생성한 DOM이 있다면
        // 여기에서 제거 작업을 해야함
        console.log("componentWillUnmount")
    }
    handleClick = () => { // 버튼을 누르면 number가 1씪 증가하는 메소드
        this.setState({
            number: this.state.number +1
        })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
        // ㅇ여기서 반환되는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달 받을 수 있다.
        // 주로 업데이트 되기 직전의 값을 참고할 일이 있을 때 할용된다.
        console.log("getSnapshoeBeforeUpdate")
        if(prevProps.color !== this.props.color) {
            return this.myref.style.color
        }
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot) { // 리렌더링을 완료한 후 실행된다.
        // 업데이트가 끝난 지궇 이므로 DOM관련 처리를 해도 무방하다.
        // 여기서 prevProps,prevState를 사용하여 전에 가졌던 데이터에 접근할 수 있다.
        // getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달 받을 수 있다.
        console.log("componentDidUpdate",prevProps,prevState)
        if(snapshot) {
            console.log("업데이트 되기 전 색상: " + snapshot)
        }
    }
    render () {
        console.log("render")
        const style = {
            color : this.props.color
        }
    
    return(
        <div>
            <h1 style={style} ref={ref=> this.myref=ref}>
                {this.state.number}
            </h1>
            <p>color: {this.state.color}</p>
            <button onClick={this.handleClick}>더하기</button>
        </div>
    )

 }
}

export default LifeCycleSample


/*

import React, { Component } from "react";
import ErrorBoundary from "./practice/ErrorBoundary";
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
      
      /*
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color} />
        </div>
      </>
    );
  }
}
export default App;

*/