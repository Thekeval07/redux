import React from 'react'
import { incrementBonus } from '../Action/Index'

const Bonus = ({  store}) => {
    
  return (
    <div>
         <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${store.getState().bonus.value}</h3>

        <button onClick={() =>store.dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  )
}

export default Bonus