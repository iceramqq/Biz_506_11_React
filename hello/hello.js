console.log("안녕", "반갑습니다");
console.log("3 + 4 = ", 3 + 4);

var num1;
let num2;
const num3 = 100;

num1 = 30;
num2 = 40;
// num3 = 200;

const myfunc = function (num) {
  console.log(num);
};

myfunc(1000);
myfunc();

const callfunc = function (call) {
  call(2000);
};
// facade 패턴
// 함수를 다른 함수의 매개변수로 전달하여
// 함수 내부에서 실행하도록 하는 패턴
callfunc(myfunc);

// 배열선언하기
// 변수: 1개의 값을 저장하는 공간
// 배열, json 객체 : 1개 이상의 값을 저장하고 활용하는 메모리 구조형
// 다른 type(숫자, 문자열)의 데이터를 저장하룻 잇지만
// 일반적으로 그렇게 사용하지 않는다
let 이름 = ["홍길동", "이몽룡", "성춘향"];

// json 객체
// key:value 쌍으로 이루어진 종류가 다릉 데이터들을 저장할때 사용한다
// 다수의 데이터를 저장하는 용도로 아주 많이 사용하는 타입니다.
let car = { 이름: "그랜져", 엔진: "알파" };
console.log(car["이름"]);

//
//
이름.push("장보고");
console.log(이름);

이름 = [...이름, "장영실"];

// json 객체의 어떤 요소 값을 변경하고 싶을때
car["엔진"] = "베타";
car = { ...car, 엔진: "베타" };
car = { ...car, 색깔: "흰색" };
console.log(car);
