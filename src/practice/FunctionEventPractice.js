import React, { useState } from "react"; // eslint-disable-line no-unused-vars

const FunctionEventPractice = () => {
    const [username, setUsername] = useState =''
    const [message, setMessage] = useState =''
    const onChangeUsername = e => setUsername(e.taget.value)
    const onChangeMessage = e => setMessage(e.target.value)
    const onClick = () => {
        alert(username + ':' + message)
        setUsername('')
        setMessage('')
    }
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick()
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자 이름"
            value={username}
            onChange={onChangeUsername}
            />
            <input
            type = "text"
            name="message"
            placeholder="아무거나 입력해 보세요"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default FunctionEventPractice