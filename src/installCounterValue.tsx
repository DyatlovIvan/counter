import {Input} from "./input";
import {Button} from "./Button";
import style from './counter.module.css'
import React from "react";

type InstallCounterValueType = {
    maxValue: number
    minValue: number
    value: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setHandler: () => void
}

export const InstallCounterValue:React.FC<InstallCounterValueType> = ({
                                        maxValue,
                                        minValue,
                                        value,
                                        setMaxValue,
                                        setMinValue,
                                        setHandler,
                                        ...props
                                    }) => {
    const disabledSetHandler = minValue >= maxValue || maxValue < 0 || minValue < 0
    const styleHandlerMax = minValue === maxValue || maxValue < 0
    const styleHandlerMin = minValue >= maxValue || minValue < 0
    return (
        <div className={style.counter}>
            <div className={style.input}>
                <span className={style.inputTitle}>max value: </span>
                <Input value={maxValue}
                       callBack={setMaxValue}
                       style={styleHandlerMax}/>
            </div>
            <div className={style.input}>
                <span className={style.inputTitle}>min value: </span>
                <Input value={minValue}
                       callBack={setMinValue}
                       style={styleHandlerMin}/>
            </div>
            <div className={style.buttonBox}>
                <Button name={'set'}
                        onClick={setHandler}
                        disabled={disabledSetHandler}/>
            </div>

        </div>
    )
}