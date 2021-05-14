import React from "react";

function TableData(props) {
    return (
        props.employees.map(employee => (
                <tr key={employee.id}>
                <th scope="row"><img alt={employee.name.first} src={employee.picture.thumbnail}/></th>
                <td>{employee.name.last}, {employee.name.first}</td>
                <td><a href={"mailto" + employee.email}>{employee.email}</a></td>
                <td><a href={"tel:" + employee.phone}>{employee.phone}</a></td>
                <td>{employee.dob.date}</td>
            </tr>
        ))
    );
}

export default TableData;