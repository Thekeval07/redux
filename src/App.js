
import { useState } from 'react';
import './App.css';
import Account from './Components/Account';
import Bonus from './Components/Bonus';

function App({store}) {
  const [account, setAccount] = useState({ amount: 0 });
  

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };
  const [points,setPoints] = useState({value:0})

  
  return (
    <div className="App">
       <h4>App</h4>
      <h3>Current Amount :{store.getState().Account.amount} </h3>
      <h3>Total Bonus : {store.getState().bonus.points}</h3>

      <Account increment={increment} decrement={decrement} incrementByAmount={incrementByAmount} account={account}/>
      <Bonus store={store}  />
    </div>
  );
}

export default App;
