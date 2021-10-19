import {ChangeEvent} from "react";
import style from './input.module.css'

type InputType = {
    value:number
    callBack:(value:number) =>void
    style?: boolean
}


export const Input = (props:InputType) =>{

    const InputOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callBack(+e.currentTarget.value)
    }

    return(
            <input className={`${props.style?style.inputError:''} ${style.input}`}
                   value = {props.value} type="number"
                   onChange={InputOnChangeHandler}/>
    )
}