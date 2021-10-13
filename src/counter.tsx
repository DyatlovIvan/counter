import style from './counter.module.css'
import {Button} from "./Button";


type CounterType = {
    counter: number
    incCounter: (value: number) => void
    restCounter: (value: number) => void
}

export const Counter = ({counter, incCounter, restCounter, ...props}: CounterType) => {

    const incHandler = () => incCounter(counter)
    const restHandler = () => restCounter(counter)

    const disabledIncHandler = () => counter === 5 ? true : false
    const disabledRestHandler = () => counter===0?true:false

    return (
        <div className={style.counter}>
            <input className={`${counter === 5 ? style.limit : ''} ${style.input}`} value={counter}/>
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
    )
}