import {Input} from "./input";
import {Button} from "./Button";
import style from './counter.module.css'

type InstallCounterValueType = {
    maxValue: number
    minValue: number
    counter: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setHandler:()=>void
}

export const InstallCounterValue = (props: InstallCounterValueType) => {
    const disabledSetHandler = props.counter===props.minValue?true:false

    return (
        <div className={style.counter}>

            max value:<Input value={props.maxValue}
                             callBack={props.setMaxValue}/>

            min value: <Input   value = {props.minValue}
                                callBack={props.setMinValue}/>

            <Button name={'set'}
                    callBack = {props.setHandler}
                    disabled={disabledSetHandler}/>

        </div>
    )
}