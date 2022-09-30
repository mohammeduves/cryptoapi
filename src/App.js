import axios from "axios";
import { useState } from "react";
import "./App.css";
// import Currencies from "./Crypto/Currencies/Currencies";
import Search from "./Search/Search";

// console.log(cryptoCurrencies);

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const data = axios
  .get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const App = () => {
  return (
    <div className="App">
      <h1>Cryptocurrency Tracker</h1>
      {/* <Search></Search> */}

      {/* <Currencies currencies={currencies}></Currencies> */}
    </div>
  );
};

export default App;
