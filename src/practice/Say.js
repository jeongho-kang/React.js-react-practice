import React, {useState} from 'react';

const Say = () => {
    const [message, setmessage] = useState('');
    const onClickEnter = () => setmessage("안녕하세요 !")
    const onClickLeave = () => setmessage("안녕히가세요 !")

    const [color, setcolor] = useState('black')

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : 'red'}} onClick={() => setcolor('red')}>빨간색</button>
            <button style={{color : 'green'}} onClick={() => setcolor('green')}>초록색</button>
            <button style={{color : 'blue'}} onClick={() => setcolor('blue')}>파란색</button>
        </div>
    )
}

export default Say;