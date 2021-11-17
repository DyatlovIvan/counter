import style from "./button.module.css";
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type ButtonType = {
    name: string
    // callBack?: () => void
    // disabled?: boolean

}
export const Button = ({name,...props}: ButtonType & ButtonHTMLAttributes<any> ) => {
    
    return (
        <span>
        <button className={style.button}
                disabled={props.disabled}
                onClick={props.onClick}>
            {name}
        </button>
    </span>
    )
}