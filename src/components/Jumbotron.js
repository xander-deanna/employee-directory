import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">
        <i className="fas fa-address-book"></i> Employee Directory
      </h1>
      <p className="lead">
        Use the carrot icons to sort results by heading or use the search to filter results.</p>
      <br></br>
      <form className="form-inline justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-info my-2 my-sm-0 d-none d-sm-block" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Jumbotron;