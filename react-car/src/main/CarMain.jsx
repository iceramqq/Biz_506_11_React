import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 2;
  state = {
    carList: [
      {
        c_id: 1,
        c_division: "연료주유",
        c_start_date: "2020-11-06 14:00",
        c_end_date: "",
        c_Travel_distance: 180000,
        c_cost: 50000,
        c_Place: "",
      },
    ],
  };

  render() {
    return (
      <div>
        <CarInsert />
        <CarList carList={this.state.carList} />
      </div>
    );
  }
}

export default CarMain;
