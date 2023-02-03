import React from 'react';
import './App.css';
import SelectedCrypto from './SelectedCrypto/SelectedCrypto';
import axios, { isCancel, AxiosError } from 'axios';
import ChartComponent from './ChartComponent/ChartComponent';

function App() {
  const [allCoins, setAllCoins] = React.useState([])
  const [coinsForChart, setCoinsForChart] = React.useState([])
  const[saveCoin,setSaveCoin]=React.useState([])
  const [filterCryptoChart,setFilterCryptoChart]=React.useState([])

  React.useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/search/trending").then(({ data }) => {
      const coins = data.coins
      debugger
      setAllCoins(coins)
    })
  }, [])

  

  let addToListBtn = (e) => {
    alert(e)
    saveCoin.length>4?alert("more than 5"):setSaveCoin([...saveCoin,e])
  }

  let removeFromListBtn=(e)=>{
    setSaveCoin(saveCoin.filter(elem=>elem!==e))
  
  }
// console.log("filterCryptoChart:"+filterCryptoChart)
  return (
    <div className='flex'>
     
      <div className='pr-12 '>
        {!allCoins ? <div>Loading...</div> : allCoins.map(e => <div className='flex p-2'><img src={e.item.small} />
          <h1> {e.item.name} </h1><br />
          
          <button className='bg-green-100' onClick={() => addToListBtn(e.item.name)}>add to my select list</button></div>)}
      </div>
      <div>
        <SelectedCrypto filterCryptoChart={filterCryptoChart} setFilterCryptoChart={setFilterCryptoChart} allCoins={allCoins} saveCoin={saveCoin} removeFromListBtn={removeFromListBtn} setSaveCoin={setSaveCoin}/>
        <div className='bg-green-300'>
          <ChartComponent filterCryptoChart={filterCryptoChart} saveCoin={saveCoin} />
        </div>
      </div>

    </div>
  );
}

export default App;
