import React from "react";
import TableData from "./TableData"


function Table(props) {
    return (
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name <i class="fas fa-carrot"></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date of Birth</th>
                </tr>
            </thead>
            <TableData />
        </table>
    );
}

export default Table;