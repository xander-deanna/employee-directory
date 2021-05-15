// react imports
import React, { Component } from "react";

// importing TableData component
import TableData from "./TableData";

// importing API call function
import API from "../utils/API";


class RandomUserData extends Component {
  // sets the state to an empty employees array
  state = {
    employees: []
  }
  componentDidMount() {
    this.createTable();
  }

  // calls the API function from utils/API and fills our employees array with data from the API
  createTable = () => {
    API.getRandomUsers()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  // renders the table
  render() {
    return (
      <table className="table table-striped table-dark table-hover">
        <thead className="thead-dark sticky">
          <tr className="sticky">
            <th scope="col">Image</th>
            <th scope="col">Name <i className="fas fa-carrot"></i></th>
            <th scope="col">Phone</th>
            <th className="d-none d-md-table-cell" scope="col">Email</th>
            <th className="d-none d-lg-table-cell" scope="col">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {/* Creates a copy of TableData elements for each employee based on props.employees.map in TableData function */}
          <TableData employees={this.state.employees} />
        </tbody>
      </table>
    );
  }
}

export default RandomUserData;