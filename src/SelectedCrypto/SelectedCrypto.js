import OneSelectedCrypto from "./OneSelectedCrypto/OneSelectedCrypto";

function SelectedCrypto(props) {
  
  return (
    <div style={{display:"grid"}} >
     
<br/>

      SelectedCrypto:  {/* {props.allCoins.filter(e=>e.item.name.toUpperCase()===props.saveCoin.map(e=>e))} */}
      {props.saveCoin.map(e=><OneSelectedCrypto filterCryptoChart={props.filterCryptoChart} setFilterCryptoChart={props.setFilterCryptoChart} removeFromListBtn={props.removeFromListBtn} name={e}/>)}
      
    </div>
  );
}

export default SelectedCrypto;
