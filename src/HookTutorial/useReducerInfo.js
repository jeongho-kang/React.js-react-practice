import react, {useReducer} from 'react'

function reducer(state,action) {
    return {
    ...state,
    [action.name]:action.value
    }
}

const useReducerInfo = () => {
    const [state,dispatch] = useReducer(reducer, {
        names: '',
        nickname: ''
    })
    const {names,nickname} = state
    const onChange = e => {
        dispatch(e.target)
    }

return (
    <div>
        <div>
            <input name="names" value = {names} onChange={onChange} />
            <input name='nickname' value = {nickname} onChange={onChange}/>
        </div>
        <div>
            <div>
                <b>이름</b> {names}
            </div>
            <div>
                <b>닉네임</b> {nickname}
            </div>
        </div>
    </div>
)
}

export default useReducerInfo