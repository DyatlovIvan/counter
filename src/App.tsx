import React, {useEffect, useState} from 'react';
import {Counter} from "./counter";
import {InstallCounterValue} from "./installCounterValue";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./bll/store";
import {
    incCounterValueAC,
    InitialStateType,
    restCounterValueAC,
    setMaxValueAC,
    setMinValueAC, setValueAC
} from "./bll/counter-reducer";
import './App.css';

function App() {

    const counter = useSelector<StateType,InitialStateType>(state =>state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        let max = localStorage.getItem('maxValue')
        let min = localStorage.getItem('minValue')
        if (max) {
            dispatch(setMaxValueAC(JSON.parse(max)))
        }
        if (min) {
            dispatch(setMinValueAC(JSON.parse(min)))
            dispatch(setValueAC())
        }

    }, [])

    // useEffect(() => {
    //     minValue >= maxValue || minValue < 0 ? setTittle(() => 'Error!!!') : setTittle(() => 'Press"set"')
    // }, [minValue, maxValue])

    const setMaxValueHandler = (value: number) => dispatch(setMaxValueAC(value))
    const setMinValueHandler = (value: number) => dispatch(setMinValueAC(value))

    const setHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(counter.maxValue))
        localStorage.setItem('minValue', JSON.stringify(counter.minValue))
        dispatch(setValueAC())
    }

    const incCounter = () => dispatch(incCounterValueAC())
    const restCounter = () => dispatch(restCounterValueAC())


    return (
        <div className="App">
            <InstallCounterValue maxValue={counter.maxValue}
                                 minValue={counter.minValue}
                                 value={counter.value}
                                 setMaxValue={setMaxValueHandler}
                                 setMinValue={setMinValueHandler}
                                 setHandler={setHandler}

            />

            <Counter maxValue={counter.maxValue}
                     minValue={counter.minValue}
                     value={counter.value}
                     title={counter.title}
                     showCounter={counter.showCounter}
                     incCounter={incCounter}
                     restCounter={restCounter}
            />
        </div>
    );
}

export default App;
