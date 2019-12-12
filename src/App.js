import React, { Component } from 'react';

import Table from './components/Table/Table';
import Button from './components/Button/Button';

const currency = ['$', '€', '£'];

function countDelta(p, c) {
    return c - p
}

export default class App extends Component {
    state = {
        loading: true,
        previous: 0,
        current: 0,
    }

    // async componentDidMount() {
    //     const url = 'https://www.coindesk.com/price/bitcoin/';
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //
    //     this.setState({
    //         current: data
    //     })
    // }

    async refresh() {
        // window.location.reload(false)
        //
        // this.setState({
        //     loading: false,
        //     previous: this.state.current
        // })

        const url = 'https://www.coindesk.com/price/bitcoin/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        const { loading, previous, current } = this.state;
        const delta = countDelta(previous, current);

        return (
            <div>
                {
                    // loading
                    // ? <div>loading...</div>
                    <Table
                        tableItems={currency}
                        currentPrice={current}
                        previousPrice={previous}
                        changed={delta} />
                }
                <Button refreshed={this.refresh} />
            </div>
        )
    }
}
