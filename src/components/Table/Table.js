import React from 'react';

function countDelta(p, c) {
    return c - p
}

const Table = (props) => {

    return (
        <table>
            <tr>
                <th></th>
                <th>Previous</th>
                <th>Current</th>
                <th>Delta</th>
            </tr>
            <tr>
                <th>USD</th>
                <td>{props.previous.USD}</td>
                <td>{props.current.USD}</td>
                <td>{countDelta(props.previous.USD, props.current.USD)}</td>
            </tr>
            <tr>
                <th>EUR</th>
                <td>{props.previous.EUR}</td>
                <td>{props.current.EUR}</td>
                <td>{countDelta(props.previous.EUR, props.current.EUR)}</td>
            </tr>
            <tr>
                <th>GBP</th>
                <td>{props.previous.GBP}</td>
                <td>{props.current.GBP}</td>
                <td>{countDelta(props.previous.GBP, props.current.GBP)}</td>
            </tr>
        </table>
    )
}

export default Table;
