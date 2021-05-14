import React from "react";
import Search from "./Search"

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center sticky">
      <h1 className="display-4">
        <i className="fas fa-address-book"></i> Employee Directory
      </h1>
      <p className="lead">
        Use the carrot icon to sort names in ascending or descending order, or use the search to filter results.</p>
      <br></br>
      < Search />
    </div>
  );
}

export default Jumbotron;