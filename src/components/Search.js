// react import
import React from "react";


function Search(props) {
  return (
    <form className="form-inline justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-info my-2 my-sm-0 d-none d-sm-block" type="submit">Search</button>
    </form>
  );
}

export default Search;