import React, { useState, useRef } from "react";
import PhoneList from "./PhoneList";
import PhoneInsert from "./PhoneInsert";
import "../css/PhoneMain.css";

function PhoneMain(props) {
  const [phoneBooks, setPhoneBooks] = useState([
    { id: 1, name: "이몽룡", number: "010-111-1111", isEdit: false },
    { id: 2, name: "이몽룡", number: "010-111-1111", isEdit: false },
    { id: 3, name: "이몽룡", number: "010-111-1111", isEdit: false },
  ]);
  /**
   *
   */
  const nexid = useRef(4);

  const insertPhoneBook = (name, number) => {
    setPhoneBooks([
      ...phoneBooks,
      {
        id: nexid.current++,
        name: name,
        number: number,
        isEdit: false,
      },
    ]);
  };
  return (
    <div className="phoneMain">
      <h3>나만의 전화번호부</h3>
      <PhoneList phoneBooks={phoneBooks} />
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
    </div>
  );
}

export default PhoneMain;
