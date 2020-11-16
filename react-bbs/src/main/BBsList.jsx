import React, { Component } from "react";
import "../css/BBsList.css";
import BBsItem from "./BBsItem";

class BBsList extends Component {
  render() {
    const { bbsList, fetchBBS, handleUpdate } = this.props;
    const bbsItemList = bbsList.map((bbs, index) => (
      <BBsItem
        key={bbs.id}
        index={index}
        bbs={bbs}
        fetchBBS={fetchBBS}
        handleUpdate={handleUpdate}
      />
    ));

    return (
      <table className="bbs-list">
        <thead>
          <tr>
            <th>No</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>제목</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>{bbsItemList}</tbody>
      </table>
    );
  }
}

export default BBsList;
