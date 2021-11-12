import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {InstallCounterValue} from "./installCounterValue";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./bll/store";
import {incCounterValueAC, InitialStateType, restCounterValueAC} from "./bll/counter-reducer";

function App() {

    const counter = useSelector<StateType,InitialStateType>(state =>state.counter)
    const dispatch = useDispatch()






    //let [counter, setCounter] = useState<number>(0)
    let [title, setTittle] = useState<string>('')
    let [showCounter, SetShowCounter] = useState<boolean>(true)
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)

    // useEffect(() => {
    //     let max = localStorage.getItem('maxValue')
    //     let min = localStorage.getItem('minValue')
    //     if (max) {
    //         setMaxValue(JSON.parse(max))
    //     }
    //     if (min) {
    //         setMinValue(JSON.parse(min))
    //         setCounter(JSON.parse(min))
    //     }
    //
    // }, [])

    useEffect(() => {
        minValue >= maxValue || minValue < 0 ? setTittle(() => 'Error!!!') : setTittle(() => 'Press"set"')
    }, [minValue, maxValue])

    const setMaxValueHandler = (value: number) => {
        setMaxValue(value)
        SetShowCounter(false)
    }
    const setMinValueHandler = (value: number) => {
        setMinValue(value)
        SetShowCounter(false)
    }

    const setHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        //setCounter(minValue)
        SetShowCounter(true)
    }
    //
    const incCounter = () => {
       dispatch(incCounterValueAC())
    }
    const restCounter = () => {
        dispatch(restCounterValueAC())
    }


    return (
        <div className="App">
            <InstallCounterValue maxValue={maxValue}
                                 minValue={minValue}
                                 counter={counter.counter}
                                 setMaxValue={setMaxValueHandler}
                                 setMinValue={setMinValueHandler}
                                 setHandler={setHandler}

            />

            <Counter maxValue={maxValue}
                     minValue={minValue}
                     counter={counter.counter}
                     title={title}
                     showCounter={showCounter}
                     incCounter={incCounter}
                     restCounter={restCounter}
            />
        </div>
    );
}

export default App;
