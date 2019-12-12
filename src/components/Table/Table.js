import React from 'react';

import TableRow from './TableRow/TableRow';

const Table = (props) => {
    return (
        <table>
            <tr>
                <th></th>
                <th>Previous</th>
                <th>Current</th>
                <th>Delta</th>
            </tr>
            {props.tableItems.map(item =>
                <TableRow
                    currency={item}
                    current={props.currentPrice}
                    previous={props.previousPrice}
                    changed={props.changed}/>
            )}
        </table>
    )
}

export default Table;
