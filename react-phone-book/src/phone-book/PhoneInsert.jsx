import React, { useState } from "react";

//
// insert 컴포넌트에서 실행하기
const PhoneInsert = ({ onClickSave }) => {
  const [phone, setPhone] = useState({ id: "", name: "", number: "" });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  /*
  react에서 input box의 처리
  html에서는 input box에 name(path) 속성을 지정하여 변수를 만들고
  키보드로 문자열을 입력하면 입력된 문장;ㅕㄹ을 변수에 저장하고
  저장버튼을 클릭하면 서봃 데이터를 전송하는 형식이었다

  react에서는 키보드에서 입력ㅎ산 문자열을 이미선ㅇ너된 state변슈에 담아소
  필요한 곳으로 이동을 하는 방식을 사용한다 하지만  react에서는 일반적으로 벽수를

  react에서는 input box 에 onChange이벤트를 설정하여 그 이벤트가 발생할때
  사용자가 키볻3ㅡ로 입력한 문자열을 state변수에 저장해주느 코드를 작성해야한다

  input box에 클릭하고 키보드로 문자를 입력하면 한글자마다 (e) 매개변수의
  e.targer.value값에 일단 저장이 된다.
  e.targer.value값에 저장된 문자열을 set
  */
  const nameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const numberChange = (e) => {
    setName(e.target.value);
  };

  /*
  onClick(또는 여러가지 이벤트) 핸들러 함수를 parents 컴포넌트로부터 전달받아
  사용할때
  그냥 단순한 이벤트 핸들러라면 onClick={onClick} 처럼 사용하면 된다.

  이벤트 핸들러에 어떤 값을 전달하여 그 값을로 무언가 연산을 수행하도록 하려먼
  ({전달하고자하는변수}) 
  */
  return (
    <form>
      <input placeholder="이름" value={name} onChange={nameChange} />
      <input placeholder="전화번호" value={number} onChange={numberChange} />
      <button onClick={({ phone }) => onClickSave(phone)} type="button">
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
