import React, { Component } from "react";
import Table from "./Table"
import TableData from "./TableData";
import API from "../utils/API";

class RandomUserData extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    this.createDirectory();
  }

  createTable = () => {
    API.getRandomUsers()
      .then(res => this.setState({ employees: res.results }))
      .catch(err => console.log(err));
  };

  render() {
    return <main className="main">
      <Table>
        <TableData
          employees={this.state.employees}
        />
      </Table>
    </main>;
  }
}
export default RandomUserData;