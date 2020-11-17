import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  render() {
    return (
      <div className="input-form">
        <input placeholder="시작일시" />
        <input placeholder="종료일시" />
        <input placeholder="현재거리" />
        <input placeholder="소요비용" />
        <input placeholder="장소" />
        <button>저장</button>
      </div>
    );
  }
}

export default CarInsert;
