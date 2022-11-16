import react, { useState ,useEffect } from "react";
// useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있다.
// class 컴포넌트의 DidMount와 DidUpdate를 합친 형태로 봐도 무방하다.
const Info = () => {
  const [names, Setnames] = useState("");
  const [nickname, Setnickname] = useState("");

  /* useEffect(() => { // input에 값을 넣을 떄 마다 렌더링 된다.
    console.log("렌더링이 완료되었습니다.")
    console.log({
        names,
        nickname
    })
  }) */

  /* useEffect(() => { // 마운트 될 떄만 실행되게 하고 싶을 떄 문단 끝에 []를 넣는다.
    console.log("마운트 될 떄만 실행됩니다.")
  }, [names]) */

  /* useEffect(() => { // 특정 값이 업데이트 될 떄만 실행하고 싶을 때
    console.log(names)
  }, [names]) */

  useEffect(() => {
    console.log("effect")
    console.log(names)
    return() => {
        console.log("cleanup")
        console.log(names)
    }
  })


  const onChangenames = (e) => {
    Setnames(e.target.value);
  }

  const onChangenickname = (e) => {
    Setnickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={names} onChange={onChangenames} />
        <input value={nickname} onChange={onChangenickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {names}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
