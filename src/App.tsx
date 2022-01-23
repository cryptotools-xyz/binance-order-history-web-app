import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"


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
    </div>
  );
}

export default App;
