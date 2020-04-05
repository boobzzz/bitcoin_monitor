import React, { Component } from "react";

import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import fetchJSON from "./lib/api.js";

const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default class App extends Component {
    state = {
        isLoading: false,
        previous: {},
        current: {},
    }

    componentDidMount = async () => {
        let data = await fetchJSON(URL)

        let current = {
            USD: data.body.bpi.USD.rate_float,
            EUR: data.body.bpi.EUR.rate_float,
            GBP: data.body.bpi.GBP.rate_float,
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

        let data = await fetchJSON(URL)

        let current = {
            USD: data.body.bpi.USD.rate_float,
            EUR: data.body.bpi.EUR.rate_float,
            GBP: data.body.bpi.GBP.rate_float,
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
