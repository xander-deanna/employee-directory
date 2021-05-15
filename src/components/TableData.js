// react imports
import React from "react";

// importing moment.js to handle DOB reformatting
import Moment from "moment";


function TableData(props) {
    return (
        props.employees.map(employee => (       
            <tr key={employee.id}>
                <th scope="row"><img className="employeeIcon" alt={employee.name.first} src={employee.picture.thumbnail}/></th>
                <td>{employee.name.last}, {employee.name.first}</td>
                <td><a href={"tel:" + employee.phone}>{employee.phone}</a></td>
                <td className="d-none d-md-table-cell"><a href={"mailto" + employee.email}>{employee.email}</a></td>
                <td className="d-none d-lg-table-cell">{Moment(employee.dob.date).format('MM/DD/YYYY')}</td>
            </tr>
        ))
    );
};

export default TableData;