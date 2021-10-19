import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from "./counter";
import { InstallCounterValue } from "./installCounterValue";

function App() {
    let [counter, setCounter] = useState<number>(0)
    let [title, setTittle] = useState<string>('')
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)
   
    useEffect(() => {
        let max = localStorage.getItem('maxValue')
        let min = localStorage.getItem('minValue')
        if (max) {
            setMaxValue(JSON.parse(max))
        }
        if (min) {
            setMinValue(JSON.parse(min))
        }

    }, [])

    useEffect(() => {
        minValue >= maxValue ? setTittle(() => 'Error!!!') : setTittle(() => 'Press"set"')
    }, [minValue, maxValue])

    // const setMaxValueHandler = (value: number) => {
    //     setMaxValue(() => value)
    // }
    // const setMinValueHandler = (value: number) => {
    //     setMinValue(() => value)
    // }

    const setHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        setCounter(minValue)
    }

    const incCounter = () => {
        // if (typeof counter === 'number') {
        setCounter(() => ++counter)
        // }
    }
    const restCounter = () => {
        setCounter(minValue)
    }
    //const restCounter = (value:number| string)=>setCounter(value)

    //const setTitle = (value: number | string) => setCounter(value)

    return (
        <div className="App">
            <InstallCounterValue maxValue={maxValue}
                minValue={minValue}
                counter={counter}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setHandler={setHandler}

            />

            <Counter maxValue={maxValue}
                minValue={minValue}
                counter={counter}
                title={title}
                incCounter={incCounter}
                restCounter={restCounter}
            //setTitle = {setTitle}
            />
        </div>
    );
}

export default App;
