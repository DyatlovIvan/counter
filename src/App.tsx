import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter";

function App() {
    let [counter,setCounter] = useState<number|string>(5)

    const incCounter = (value:number| string)=>{
      if( typeof counter === 'number' ){
      setCounter(++counter)
      }
    }

    const restCounter = (value:number| string)=>setCounter(value)

    const setTitle = (value:number| string)=> setCounter(value)

  return (
    <div className="App">
      <Counter
          counter = {counter}
          incCounter = {incCounter}
          restCounter = {restCounter}
          setTitle = {setTitle}/>
    </div>
  );
}

export default App;
