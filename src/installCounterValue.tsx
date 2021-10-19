import { Input } from "./input";
import { Button } from "./Button";
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
    const disabledSetHandler = props.minValue >= props.maxValue || props.maxValue < 0 || props.minValue < 0 ? true : false
    const styleHandlerMax = props.minValue === props.maxValue || props.maxValue < 0 ? true : false
    const styleHandlerMin = props.minValue >= props.maxValue || props.minValue < 0 ? true : false
    return (
        <div className={style.counter}>
            <div className={style.input}>
                <span className={style.inputTitile}>max value: </span>
                <Input value={props.maxValue}
                    callBack={props.setMaxValue}
                    style={styleHandlerMax} />
            </div>
            <div className={style.input}>
                <span className={style.inputTitile}>min value: </span>
                <Input value={props.minValue}
                    callBack={props.setMinValue}
                    style={styleHandlerMin} />
            </div>
            <div className = {style.buttonBox}>
                <Button name={'set'}
                    callBack={props.setHandler}
                    disabled={disabledSetHandler} />
            </div>

        </div>
    )
}