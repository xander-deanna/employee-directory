import React, { Component } from "react";
import Table from "./Table"
import TableData from "./TableData";
import API from "../utils/API";

class RandomUserData extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    this.createTable();
  }

  createTable = () => {
    API.getRandomUsers()
      .then(res => this.setState({ employees: res.data.results }))
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