import style from "./button.module.css";

type ButtonType = {
    name: string
    callBack?: () => void
    disabled?: boolean

}
export const Button = ({name,...props}: ButtonType) => {
    
    return (
        <span>
        <button className={style.button}
                disabled={props.disabled}
                onClick={props.callBack}>
            {name}
        </button>
    </span>
    )
}