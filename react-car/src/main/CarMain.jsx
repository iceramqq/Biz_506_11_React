import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 1;
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

  onCreate = (
    c_division,
    c_start_date,
    c_end_date,
    c_Travel_distance,
    c_cost,
    c_Place
  ) => {
    const newList = [
      ...this.state.carList,
      {
        c_id: ++this.id,
        c_division: c_division,
        c_start_date: c_start_date,
        c_end_date: c_end_date,
        c_Travel_distance: c_Travel_distance,
        c_cost: c_cost,
        c_Place: c_Place,
      },
    ];
    this.setState({ carList: newList });
  };

  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.carList);
    const thisString = JSON.stringify(this.state.carList);
    if (preString !== thisString) {
      localStorage.setItem("carList", thisString);
    }
    console.log("update", this.state.carList);
  }

  componentDidMount() {
    const loadList = localStorage.getItem("carList");
    if (loadList) {
      const jsonList = JSON.parse(loadList);
      this.setState({ carList: jsonList });
      this.id = jsonList.length;
    }
  }

  update = (id, title) => {
    const updateList = this.state.carList.map((list) => {
      if (list.c_id === Number(id)) {
        return {
          ...list,
          b_title: title,
        };
      } else {
        return list;
      }
    });
    this.setState({ carList: updateList });
  };

  render() {
    return (
      <div>
        <CarInsert onCreate={this.onCreate} />
        <CarList carList={this.state.carList} update={this.update} />
      </div>
    );
  }
}

export default CarMain;
