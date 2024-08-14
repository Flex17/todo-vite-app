import { ChangeEventHandler, InputHTMLAttributes, useId } from "react";
import { classNames, Mods } from "shared/libs";
import css from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	value?: string,
	className?: string,
	label?: string,
	setValue?: (value: string) => void,
}

export const Input = ({ className, value, setValue, label, disabled, ...props }: InputProps) => {
    const handleValue: ChangeEventHandler<HTMLInputElement> = (e) => setValue?.(e.target.value);

    const id = useId();

    const mods: Mods = {
        [css.disabled]: disabled,
    };

    return (
        <div className={css.input_wrapper}>
            <label
                htmlFor={id}
                className={classNames("", mods)}
            >
                {label}
            </label>
            <input
                id={id}
                type="text"
                disabled={disabled}
                value={value}
                onChange={handleValue}
                className={classNames(css.wrapper, mods, [className])}
                {...props}
            />
        </div>
    );
};
