import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-dark table-hover table-sm">
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
                {props.children}
            </tbody>
        </table>
    );
}

export default Table;