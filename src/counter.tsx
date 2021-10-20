import style from './counter.module.css'
import {Button} from "./Button";
import {ChangeEvent, useState} from 'react';


type CounterType = {
    counter: number
    title: string
    maxValue: number
    minValue: number
    showCounter:boolean
    incCounter: () => void
    restCounter: () => void
    //setTitle: (value: number | string) => void
}

export const Counter = ({counter, incCounter, restCounter, ...props}: CounterType) => {
   
    const disabledIncHandler = counter === props.maxValue ? true : false
    const disabledRestHandler = counter === props.minValue ? true : false
    
    return (
        
        <div className={style.counter}>
            <div className={`${counter === props.maxValue && props.showCounter ===true ? style.limit : ''} ${style.inputCounter}`}>
                {props.showCounter?counter:props.title}
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