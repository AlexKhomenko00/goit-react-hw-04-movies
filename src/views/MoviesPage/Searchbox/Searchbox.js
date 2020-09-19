import React, { Component } from "react";

import s from "./Searchbox.module.css";

export default class Searchbox extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handeSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === "") {
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className={s.search} onSubmit={this.handeSubmit}>
        <input
          type="text"
          className={s.searchTerm}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className={s.searchButton} type="submit">
          Search
        </button>
      </form>
    );
  }
}
