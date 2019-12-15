import React, { Component } from 'react';

import Table from './components/Table/Table';
import Button from './components/Button/Button';

export default class App extends Component {
    state = {
        isLoading: false,
        previous: {},
        current: {},
    }

    componentDidMount = async () => {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const response = await fetch(url);
        const data = await response.json();

        let current = {
            USD: data.bpi.USD.rate_float,
            EUR: data.bpi.EUR.rate_float,
            GBP: data.bpi.GBP.rate_float,
        }

        this.setState({
            previous: current,
            current: current
        })
    }

    refreshRates = async () => {
        this.setState({
            isLoading: true,
            previous: this.state.current,
        })

        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const response = await fetch(url);
        const data = await response.json();

        let current = {
            USD: data.bpi.USD.rate_float,
            EUR: data.bpi.EUR.rate_float,
            GBP: data.bpi.GBP.rate_float,
        }

        this.setState({
            isLoading: false,
            current: current
        })
    }

    render() {
        let { isLoading, previous, current } = this.state;

        return (
            <div>
                {isLoading
                    ? <div>loading...</div>
                    : <Table
                        current={current}
                        previous={previous} />}
                <Button refreshed={this.refreshRates} />
            </div>
        )
    }
}
