import style from './counter.module.css'
import {Button} from "./Button";
import {ChangeEvent, useEffect, useState} from 'react';


type CounterType = {
    value: number
    title: string
    maxValue: number
    minValue: number
    showCounter: boolean
    incCounter: () => void
    restCounter: () => void
    //setTitle: (value: number | string) => void
}

export const Counter = ({
                            value,
                            title,
                            maxValue,
                            minValue,
                            showCounter,
                            incCounter,
                            restCounter,
                            ...props
                        }: CounterType) => {

    const disabledIncHandler = value === maxValue
    const disabledRestHandler = value === minValue

    //useEffect(()=>{
    //    const maxValue = localStorage.getItem("maxValue")
    // },[])

    return (

        <div className={style.counter}>
            {/*<div className={`${counter === maxValue && showCounter === true ? style.limit : ''} ${style.inputCounter}`}>*/}
            {/*    {showCounter ? counter : title}*/}
            {/*</div>*/}
            {showCounter ?
                <div className={value === maxValue ? `${style.inputCounter} ${style.limit}` : style.inputCounter}>
                    {value}
                </div>
                :
                <div className={style.inputCounter}>
                    {title}
                </div>}

            <div className={style.buttonBox}>
                <Button onClick={incCounter}
                        name='inc'
                        disabled={disabledIncHandler}
                />
                <Button onClick={restCounter}
                        name='rest'
                        disabled={disabledRestHandler}
                />
            </div>
        </div>

    )
}