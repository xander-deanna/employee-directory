import React from "react";

function TableData(props) {
    return (
        <tbody>
            <tr>
                {console.log(props.employee)}
                <td><img alt="Test" src=""/></td>
                <td>Mark</td>
                <td>666-666-6666</td>
                <td>email@email.com</td>
                <td>1/1/1800</td>
            </tr>
        </tbody>
    );
}

export default TableData;