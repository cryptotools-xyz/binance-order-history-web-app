import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  useEffect(() => {
    const url = "https://cryptoyellbinanceorderhis.herokuapp.com/api/my-trades-performance/BTCUSDT"
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setTrades(data)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const [trades, setTrades] = useState([]);

  return (
    <div>
      <h1>Binance order history</h1>
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
            trades.map((item: any) => {
              console.log(item)
              return <tr>
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
    </div>
  );
}

export default App;
