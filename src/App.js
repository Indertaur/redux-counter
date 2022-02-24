import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './actions/index'

const App = () => {

  const myState = useSelector((state) => state.changeInNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <h1> Increment/Decrement Counter</h1>
        <h4> Using React-Redux</h4>
        <div className="quantity">
          <div className="quantity__minus" title="Decrement" onClick={()=> dispatch(Decrement())}>  <span> - </span> </div>
          <input className="quantity__input" type="text" value={myState} />
          <div className="quantity__plus" title="Increment" onClick={()=> dispatch(Increment(5))}> <span> + </span> </div>
        </div>
      </div>
    </>
  )
}

export default App