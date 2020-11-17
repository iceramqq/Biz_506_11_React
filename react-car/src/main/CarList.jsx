import React, { Component } from "react";
import "../css/CarList.css";
import CarItem from "./CarItem";

class CarList extends Component {
  render() {
    const { carList } = this.props;
    const carListItem = carList.map((carList) => {
      return <CarItem carList={carList} />;
    });
    return (
      <table className="car-list">
        <thead>
          <tr>
            <th>No</th>
            <th>구분</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>현재거리</th>
            <th>소모비용</th>
            <th>장소</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>{carListItem}</tbody>
      </table>
    );
  }
}

export default CarList;
