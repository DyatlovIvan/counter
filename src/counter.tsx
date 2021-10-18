import style from './counter.module.css'
import {Button} from "./Button";
import {ChangeEvent, useState} from 'react';


type CounterType = {
    counter: number
    title: string
    maxValue: number
    minValue: number
    incCounter: () => void
    restCounter: () => void
    //setTitle: (value: number | string) => void
}

export const Counter = ({counter, incCounter, restCounter, ...props}: CounterType) => {
    // let [maxValue, setMaxValue] = useState(5)
    // let [minValue, setMinValue] = useState(0)
    // const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //
    //     setMaxValue(JSON.parse(e.currentTarget.value))
    //
    //     minValue===maxValue?props.setTitle('Incorrect value!'):props.setTitle('enter values and press "set"')
    //
    // }
    // const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    //
    //      setMinValue(JSON.parse(e.currentTarget.value))
    //
    //
    //
    // }
    // const setHandler = () => {
    //     props.setTitle(minValue)
    // }
    //
    // const setDisabledHandler = minValue>=maxValue?true:false


    // const incHandler = () => incCounter(minValue)
    // const restHandler = () => restCounter(minValue)
    //
    const disabledIncHandler =  counter === props.maxValue ? true : false
    const disabledRestHandler = counter === props.minValue ? true : false
    //
    // return (
    //     <div>
    //         <div className={style.counter}>
    //             <div>
    //                 max value:
    //                 <input value={maxValue} type='number' onChange={setMaxValueHandler}
    //                 className={minValue===maxValue?style.inputError:''}/>
    //             </div>
    //             <div>
    //                 min value:
    //                 <input value={minValue} type='number' onChange={setMinValueHandler}
    //                 className={minValue>=maxValue?style.inputError:''}/>
    //             </div>
    //             <div>
    //                 <Button callBack={setHandler}
    //                     name='set'
    //                     disabled={setDisabledHandler} />
    //             </div>
    //
    //         </div>

    return (

        <div className={style.counter}>
            <div className={`${counter === props.maxValue ? style.limit : ''} ${style.input}`}>
                {props.title}
            </div>

            <div className={style.buttonBox}>
                <Button callBack={incCounter}
                        name='inc'
                        disabled={disabledIncHandler}
                />
                <Button callBack={restCounter}
                        name='rest'
                       disabled={disabledRestHandler}
                />
            </div>
        </div>

)
}