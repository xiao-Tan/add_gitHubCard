import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = { userName: "" };

  onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    ); //get new profileData
    this.props.onSubmit(res.data); //调用app onSubmit function -> addNewProfile function -> add data to state
    this.setState({ userName: "" });
  };

  onChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="GitHub Username"
          value={this.state.userName}
          onChange={this.onChange}
          required
        />
        <button> Add Card </button>
      </form>
    );
  }
}

export default Form;
