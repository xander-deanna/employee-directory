import React from "react";

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
            <tbody>
                <tr>
                    <td>Image Here</td>
                    <td>Mark Smith</td>
                    <td>666-666-6666</td>
                    <td>email@email.com</td>
                    <td>1/1/1800</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;