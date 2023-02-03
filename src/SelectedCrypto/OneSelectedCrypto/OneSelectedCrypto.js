import React, { useState } from 'react';
import axios from 'axios';

let OneSelectedCrypto=({filterCryptoChart,setFilterCryptoChart,removeFromListBtn,name})=>{
  const [filterCrypto,setFilterCrypto]=useState([])

React.useEffect(() => {
  axios.get("https://api.coingecko.com/api/v3/coins/"+name.toLowerCase()+"/market_chart?vs_currency=usd&days=1&interval=daily").then(({ data }) => {
    const coins = data.prices[0][1]
    //console.log(">>>>"+data.prices)
    // setFilterCryptoChart(data.prices)
    setFilterCrypto(coins)
    setFilterCryptoChart([data.prices,...filterCryptoChart])
  })
}, [])

  return(
    <div>
      <hr/>
      <h1>{name}</h1>
      {filterCrypto}
      <button onClick={()=>removeFromListBtn(name)}>delete crypto</button>
      <hr/>
    </div>
  )
}

export default OneSelectedCrypto