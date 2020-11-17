import React, { Component } from "react";

class CarItem extends Component {
  state = {
    c_division: "",
    c_Travel_distance: "",
    c_cost: "",
    c_Place: "",
  };
  render() {
    const { carList, update } = this.props;
    return (
      <tr>
        <td>{carList.c_id}</td>
        <td>{carList.c_division}</td>
        <td>{carList.c_start_date}</td>
        <td>{carList.c_end_date}</td>
        <td>{carList.c_Travel_distance}</td>
        <td>{carList.c_cost}</td>
        <td>{carList.c_Place}</td>
        <td>&times;</td>
      </tr>
    );
  }
}

export default CarItem;
