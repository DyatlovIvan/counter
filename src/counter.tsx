import style from './counter.module.css'
import { Button } from "./Button";
import { ChangeEvent, useState } from 'react';


type CounterType = {
    counter: number | string
    incCounter: (value: number | string) => void
    restCounter: (value: number | string) => void
    setTitle: (value: number | string) => void
}

export const Counter = ({ counter, incCounter, restCounter, ...props }: CounterType) => {
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)
    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setMaxValue(JSON.parse(e.currentTarget.value))

        minValue===maxValue?props.setTitle('Incorrect value!'):props.setTitle('enter values and press "set"')

    }
    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        
         setMinValue(JSON.parse(e.currentTarget.value))



    }
    const setHandler = () => {
        props.setTitle(minValue)
    }

    const setDisabledHandler = minValue>=maxValue?true:false






    const incHandler = () => incCounter(minValue)
    const restHandler = () => restCounter(minValue)

    const disabledIncHandler = () => counter === maxValue ? true : false
    const disabledRestHandler = () => counter === minValue ? true : false

    return (
        <div className={style.all}>
            <div className={style.counter}>
                <div>
                    max value:
                    <input value={maxValue} type='number' onChange={setMaxValueHandler} 
                    className={minValue===maxValue?style.inputError:''}/>
                </div>
                <div>
                    min value:
                    <input value={minValue} type='number' onChange={setMinValueHandler}
                    className={minValue>=maxValue?style.inputError:''}/>
                </div>
                <div>
                    <Button callBack={setHandler}
                        name='set'
                        disabled={setDisabledHandler} />
                </div>

            </div>







            <div className={style.counter}>
                <input className={`${counter === maxValue ? style.limit : ''} ${style.input}`} value={counter} />
                <div className={style.buttonBox}>
                    <Button callBack={incHandler}
                        name='inc'
                        disabled={disabledIncHandler()}
                    />
                    <Button callBack={restHandler}
                        name='rest'
                        disabled={disabledRestHandler()}
                    />
                </div>
            </div>
        </div>
    )
}