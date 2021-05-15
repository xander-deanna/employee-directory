// react imports
import React, { Component } from "react";

// importing Jumbotron and Table components
import Jumbotron from "./Jumbotron";
import Table from "./Table";

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
        <React.Fragment>
            <Jumbotron/>
            <Table/>
        </React.Fragment>
      );
    }
  }
  
  export default RandomUserData;