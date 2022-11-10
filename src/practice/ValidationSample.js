import React, { Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    input = React.createRef() // ref 생성

    handleFocus= () => {
        this.input.current.focus() // 콜백 함수를 사용할 때는 current가 들어가야함
    }

    state = {
        password:'',
        clicked : false,
        validated : false
    }

    handlechange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleButtonClick = () =>{ 
        this.setState({
            clicked:true,
            validated: this.state.password === '0000'
        })
        this.input.focus() // 버튼에서 onclick이 일어날 때 포커스를 줌
    }
    render() {
        return (
            <div>
                <input
                    ref={(ref)=>{this.input=ref}} // 포커스가 버튼으로 다시 넘어감
                    type="password"
                    value={this.state.password}
                    onChange={this.handlechange}
                    // 0000을 입력하면 초록색 다른것을 입력하면 빨간색이 나옴
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>

        )
    }
}

export default ValidationSample