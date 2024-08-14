import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/libs";
import css from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string,
	children?: ReactNode
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
    const a = "";
    return (
        <button
            className={classNames(css.wrapper, {}, [className])}
            {...props}
        >
            {children}
        </button>
    );
};
