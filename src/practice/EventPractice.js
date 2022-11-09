import React, { Component } from 'react'

class EventPractice extends Component {

state = {
    message : ' '
}


    constructor(props) {
        super(props)
        //this 는 호출부에 의해 결정되므로 클래스의 임의 메서드가 특정 html요소를
        //이벤트로 등록되는 과정에서 메서드와 this 관계가 끊어지게 된다.
        //이 때문에 이벤트가 등록되어도 자신을 가리키기 위해서는 this를 바인딩 하는 작업이 필요하다.
        //만약 바인딩 하지 않으면 this가 undefined를 가리키게 된다.
        this.handleChange = this.handleChange.bind(this)
        this.handleclick = this.handleclick.bind(this)
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        })
    }
    handleclick() {
        alert(this.state.message)
        this.setState({
            message: ''
        })
    }


    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name = "message"
                placeholder='아무거나 입력해 보세요'
                value={this.state.message}
                change={this.handleChange}
                />
                {/* 입력한 값이 state에 잘 들어갔는지 검증하는 코드 */}
                <button onClick={this.handleclick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;