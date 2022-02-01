import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';

function App() {

  useEffect(() => {
    const url = process.env.REACT_APP_WEB_API_URL

    if (!url) {
      throw new Error("The REACT_APP_WEB_API_URL variable is not defined.");
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrades(data);
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

      <ul>
        <li>qty sum: {trades.reduce((sum, { qty, order: { side } }) => {
          if(side === "BUY") return sum + parseFloat(qty)
          if(side === "SELL") return sum - parseFloat(qty)
          return 0;
        }, 0)}</li>
      </ul>

      <hr />

      <Table trades={trades} />
    </div>
  );
}

export default App;
