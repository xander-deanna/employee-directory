import React from "react";

function Table(props) {
    return (
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name <i class="fas fa-carrot"></i></th>
                    <th scope="col">Phone</th>
                    <th class="d-none d-md-table-cell" scope="col">Email</th>
                    <th class="d-none d-lg-table-cell" scope="col">Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}

export default Table;