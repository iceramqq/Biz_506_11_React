import React, { Component } from "react";
import "../css/CarList.css";

class CarList extends Component {
  render() {
    return (
      <table className="car-list">
        <thead>
          <tr>
            <th>No</th>
            <th>구분</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>전체거리</th>
            <th>현재거리</th>
            <th>소모비용</th>
            <th>장소</th>
          </tr>
        </thead>
        <tbody>
          <td>s</td>
          <td>s</td>
          <td>s</td>
          <td>s</td>
          <td>s</td>
          <td>s</td>
          <td>s</td>
          <td>s</td>
        </tbody>
      </table>
    );
  }
}

export default CarList;
