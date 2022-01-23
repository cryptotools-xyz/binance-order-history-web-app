import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';

function App() {

  useEffect(() => {
    const url = "https://cryptoyellbinanceorderhis.herokuapp.com/api/my-trades-performance/BTCUSDT"
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
      <Table trades={trades} />
    </div>
  );
}

export default App;
