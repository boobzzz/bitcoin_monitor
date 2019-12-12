import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.currency}</td>
            <td>{props.previous}</td>
            <td>{props.current}</td>
            <td>{props.changed}</td>
        </tr>
    )
}

export default TableRow;
