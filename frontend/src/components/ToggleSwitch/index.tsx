// https://www.w3schools.com/howto/howto_css_switch.asp
import { useState } from "react";
import "./styles.css";

type ToggleSwitchProps = {
    checked: boolean;
    square?: boolean;
    onChecked: Function;
    checkedColor?: string;
    uncheckedColor?: string;
    size?: "sm" | "lg";
}
function ToggleSwitch({checked, square = false, onChecked, size} :ToggleSwitchProps) {
    const [value, setValue] = useState(checked);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(!value);
        onChecked(value);
    }
    return (
        <>
            <label className={'switch '+size}>
                <input type="checkbox"
                    onChange={handleOnChange}
                    checked={value}
                />
                <span className={(square ? 'slider ':'slider round ') + size}></span>
            </label>
        </>
    )
}
export default ToggleSwitch;

