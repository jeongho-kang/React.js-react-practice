import react, {useState, useMemo, useCallback , useRef} from 'react'
// useMemo 를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.
// useCallback연산은 useMemo연산과 비슷하지만 주로 렌더링 성능을 최적화 할 때 사용한다.
// useCallback을 사용하면 이벤트 핸들러 함수를 필욯라 떄만 생성 할 수 있다.
// useRef는 함수형 컴포넌트에서 ref를 사용하기 쉽겧 해준다.
// 등록 버튼을 누를 때 포커스가 인풋쪽으로 넘어가게 해준다.


const getAvarage=number => {
    console.log("평균값 게산 중..")
    if (number.length === 0) return 0
    const sum = number.reduce((a,b) => a+b)
    return sum /number.length
}

const Average = () => {
    const[list,setList] = useState([])
    const[number,setNumber] = useState('')
    const inputEl = useRef(null)

    // useCallback의 첫번쨰 파라미터에는 생성하고 싶은 함수를 넣고
    // 두번 째 파라미터에는 배열을 넣으면 된다.
    // 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야한다.

    // onChange처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때 단 한번 생성이 되고,
    // onInsert처럼 배열 안에 number,list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수가 생성된다.
    const onChange =  useCallback(e=> {
        setNumber(e.target.value)
    }, []) // 컴포넌트가 처음 렌더링 될 때만 함수 생성
    const onInsert = useCallback(() => {
        const nextList= list.concat(parseInt(number)) // list에 concat을 아용해 추가
        setList(nextList)
        setNumber('')
            inputEl.current.focus()
    }, [number, list]) // number 혹은 list가 바뀌었을 떄만 함수 생성
    // 기존의 number와 list를 조회해서 nextlist를 생성하기 때문에 배열안에 꼭 list와 number를 넣어줘야한다.


    // useMemo Hook을 사용하면 렌더링 과정에서 특정값이 바뀌었을 때만 연산을 실행하고
    // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식이다.
    const avg = useMemo(() => getAvarage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    )
}

export default Average  