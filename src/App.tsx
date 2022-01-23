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
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
