import React, { useState } from "react"
import _ from 'lodash';

function Table(props: any) {
    const { trades } = props;
    let sortedTrades = [...trades];

    const [sortedField, setSortedField] = React.useState("cost");

    if (sortedField !== null) {
        sortedTrades.sort((a, b) => {
            if (_.get(a, sortedField) < _.get(b, sortedField)) {
                return -1;
            }
            if (_.get(a, sortedField) > _.get(b, sortedField)) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">orderId</th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('time')}>
                            time
                        </button>
                    </th>
                    <th scope="col">symbol</th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('qty')}>
                            qty
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('price')}>
                            price
                        </button>
                    </th>

                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('performance.cost')}>
                            cost
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('performance.worth')}>
                            worth
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('performance.profit')}>
                            profit
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('performance.percentage_change')}>
                            percentage_change
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedTrades.map((item: any, index: number) => {
                        return <tr key={index}>
                            <td >{item.orderId}</td>
                            <td>{item.time}</td>
                            <td>{item.symbol}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.performance.cost}</td>
                            <td>{item.performance.worth}</td>
                            <td>{item.performance.profit}</td>
                            <td>{item.performance.percentage_change}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;
