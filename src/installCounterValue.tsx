import {Input} from "./input";
import {Button} from "./Button";
import style from './counter.module.css'

type InstallCounterValueType = {
    maxValue: number
    minValue: number
    value: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setHandler: () => void
}

export const InstallCounterValue = ({
                                        maxValue,
                                        minValue,
                                        value,
                                        setMaxValue,
                                        setMinValue,
                                        setHandler,
                                        ...props
                                    }: InstallCounterValueType) => {
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
                        callBack={setHandler}
                        disabled={disabledSetHandler}/>
            </div>

        </div>
    )
}