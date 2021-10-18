import {Input} from "./input";
import {Button} from "./Button";
import style from './counter.module.css'

type InstallCounterValueType = {
    maxValue: number
    minValue: number
    counter: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setHandler: () => void
}

export const InstallCounterValue = (props: InstallCounterValueType) => {
    const disabledSetHandler = props.counter === props.minValue ? true : false
    const styleHandler = () => props.minValue >= props.maxValue|| props.minValue<0||props.maxValue<0 ? true : false

    return (
        <div className={style.counter}>

            max value:<Input value={props.maxValue}
                             callBack={props.setMaxValue}
                             style={styleHandler()}/>

            min value: <Input value={props.minValue}
                              callBack={props.setMinValue}
                              style={styleHandler()}/>

            <Button name={'set'}
                    callBack={props.setHandler}
                    disabled={disabledSetHandler}/>

        </div>
    )
}