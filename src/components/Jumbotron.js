// react import
import React from "react";

// importing Search component
import Search from "./Search"


function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h3 className="display-4">
        <i className="fas fa-address-book"></i> Employee Directory
      </h3>
      <p className="lead">
        Use the carrot icon to sort names in ascending or descending order, or use the search to filter results.</p>
      <br></br>
      <Search/>
    </div>
  );
}

export default Jumbotron;