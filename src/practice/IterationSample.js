import React, {useState} from 'react'

/*
const IterationSample = () => {
    const names= ['눈사람','얼음','눈','바람']
    const nameList = names.map((name,index) => <li key = {index}>{name}</li>)
    return <ul>{nameList}</ul>
     실행은 잘 되지만, 개발자 도구에서는 오류가 뜸,
    이유는 key가 없어서 인데, 배열에서 어떤 원소를 렌더링 했는지 확인하기위해서는
    key가 필요하다.
    key값은 언제나 유일해야 하기 때문에 데이터가 가진 고윳값을 key로 설정한다.
    예로들면 id같은것인데 여기서는 고윳값이 없으므로
    map 함수에 전달되는 콜백 함수의 인자 index를 사용한다.
    
}
*/

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5) // 새로운 항목을 추가할 떄 사용할 id

    const onPressKey = e => {
        if(e.key === 'Enter')
        onClick()
    }
    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const NextNames = names.concat({ // push를 안하고 concat을 한 이유는 push는 기존 배열에 추가하는 반면에
            // concat은 새로운 배열을 만들어준다는 차이점이 있다.
            id:nextId, // nextId값을 id로 설정하고
            text: inputText // inputText값을 text로 설정한다.
        })
        setNextId(nextId+1) // nextId값에 1을 더해준다
        setInputText('') // Text값을 비운다
        setNames(NextNames) // names 값을 업데이트 한다.
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        // react 는 추가할때도 마찬가지로 불변성을 유지하면서 업데이트 해줘여한다.
        // 불변성을 유지하면서 특정 항목을 지울떄는 배열의 filter함수를 사용한다.
        setNames(nextNames)
    }
    
    const nameList = names.map(name => <li key = {name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
    return (
    <>
    <input value={inputText} onChange={onChange} onKeyPress={onPressKey}/>
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
    </>
)}

export default IterationSample