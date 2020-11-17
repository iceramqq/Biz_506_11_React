import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  state = {
    c_division: "",
    c_start_date: "",
    c_end_date: "",
    c_Travel_distance: "",
    c_cost: "",
    c_Place: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCreate = (e) => {
    const { onCreate } = this.props;
    const {
      c_division,
      c_start_date,
      c_end_date,
      c_Travel_distance,
      c_cost,
      c_Place,
    } = this.state;
    onCreate(
      c_division,
      c_start_date,
      c_end_date,
      c_Travel_distance,
      c_cost,
      c_Place
    );
  };

  render() {
    return (
      <div className="input-form">
        <input
          name="c_division"
          value={this.state.c_division}
          onChange={this.handleOnChange}
          placeholder="구분"
        />
        <input
          name="c_start_date"
          value={this.state.c_start_date}
          onChange={this.handleOnChange}
          placeholder="시작일시"
        />
        <input
          name="c_end_date"
          value={this.state.c_end_date}
          onChange={this.handleOnChange}
          placeholder="종료일시"
        />
        <input
          name="c_Travel_distance"
          value={this.state.c_Travel_distance}
          onChange={this.handleOnChange}
          placeholder="현재거리"
        />
        <input
          name="c_cost"
          value={this.state.c_cost}
          onChange={this.handleOnChange}
          placeholder="소요비용"
        />
        <input
          name="c_Place"
          value={this.state.c_Place}
          onChange={this.handleOnChange}
          placeholder="장소"
        />
        <button type="button" onClick={this.onCreate}>
          추가
        </button>
      </div>
    );
  }
}

export default CarInsert;
