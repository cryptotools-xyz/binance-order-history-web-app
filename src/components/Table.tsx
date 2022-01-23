import React, { useEffect, useState } from "react"

function Table(props: any) {
    const { trades } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">orderId</th>
                    <th scope="col">time</th>
                    <th scope="col">symbol</th>
                    <th scope="col">qty</th>
                    <th scope="col">price</th>

                    <th scope="col">cost</th>
                    <th scope="col">worth</th>
                    <th scope="col">profit</th>
                    <th scope="col">percentage_change</th>
                </tr>
            </thead>
            <tbody>
                {
                    trades.map((item: any, index: number) => {
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
