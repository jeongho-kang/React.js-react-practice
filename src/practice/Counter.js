import React, { Component } from "react";


class Counter extends Component {
    // constructor를 작성하였을 때
    /* constructor(props) {
        super(props) // constructor(props)을 작성하면 super(props)를 항상 작성해줘야한다.
        // state 초깃값 설정하기
        this.state = {
            number : 0 ,
            fixedNumver : 0
        }
    }
    */
    // 작성하지 않았을 때 
    state = {
        number:0,
        fixedNumver:0
    }

    render() {
        const {number, fixedNumver} = this.state; // state를 조회할 떄는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumver}</h2>
                <button
                // onclick을 통해 버튼을 눌렀을 때 호출할 함수를 지정
                onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                    this.setState({ number : number + 1})
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;