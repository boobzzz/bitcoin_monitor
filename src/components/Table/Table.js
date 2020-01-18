import React from 'react';

function countDelta(p, c) {
    return c - p
}

const Table = (props) => {
    return (
        <table>
            <tr id="trow-0">
                <th></th>
                <th>Previous</th>
                <th>Current</th>
                <th>Delta</th>
            </tr>
            <tr id="trow-1">
                <th>$</th>
                <td>{props.previous.USD}</td>
                <td>{props.current.USD}</td>
                <td>{countDelta(props.previous.USD, props.current.USD)}</td>
            </tr>
            <tr id="trow-2">
                <th>€</th>
                <td>{props.previous.EUR}</td>
                <td>{props.current.EUR}</td>
                <td>{countDelta(props.previous.EUR, props.current.EUR)}</td>
            </tr>
            <tr id="trow-3">
                <th>£</th>
                <td>{props.previous.GBP}</td>
                <td>{props.current.GBP}</td>
                <td>{countDelta(props.previous.GBP, props.current.GBP)}</td>
            </tr>
        </table>
    )
}

export default Table;
