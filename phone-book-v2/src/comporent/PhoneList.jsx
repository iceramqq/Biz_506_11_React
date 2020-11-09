import React from "react";
import "../css/PhoneList.css";

const PhoneList = ({ phoneBooks }) => {
  /**
   * tr tag 를 클릭했을때 사용할 event 핸들러
   * tr tag를 클릭읋 했짐나 우리가 사용할 것은 td tag가 목적이므로
   * e.target.className 속성을 사용하여 어떤 td 가 클릭됬는지 확인하자
   */
  const trOnClick = (e) => {
    console.log(e.target.className);
    const className = e.target.className;
    const closest = e.target.closest("TR");
    const name = closest.data.name;
    const id = closest.id;

    if (className === "delete") {
      if (window.confirm(name + "를 정말 삭제합니다!!!")) {
        alert(name + "데이터 삭제");
        return false;
      }
    }
  };
  /**
   *
   * 문제가 발생할수 있다.
   */
  const phoneList = phoneBooks.map((phone, index) => {
    return (
      <tr
        key={phone.id}
        onClick={trOnClick}
        data-id={phone.id}
        data-name={phone.name}
      >
        <td>{index + 1}</td>
        <td>{phone.name}</td>
        <td>{phone.number}</td>
        <td className="delete">&times;</td>
      </tr>
    );
  });

  return (
    <table className="phoneList">
      <thead>
        <tr>
          <th>No</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>&hearts;</th>
        </tr>
      </thead>
      <tbody>{phoneList}</tbody>
    </table>
  );
};

export default PhoneList;
