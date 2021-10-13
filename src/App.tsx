import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter";

function App() {
    let [counter,setCounter] = useState(0)

    const incCounter = (value:number)=>setCounter(++counter)

    const restCounter = (value:number)=>setCounter(0)

  return (
    <div className="App">
      <Counter
          counter = {counter}
          incCounter = {incCounter}
          restCounter = {restCounter}/>
    </div>
  );
}

export default App;
