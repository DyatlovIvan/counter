import {ChangeEvent} from "react";

type InputType = {
    value:number
    callBack:(value:number) =>void
}


export const Input = (props:InputType) =>{
    const InputOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callBack(+e.currentTarget.value)

    }
    return(
        <div>
            <input value = {props.value} type="number" onChange={InputOnChangeHandler}/>
        </div>

    )
}