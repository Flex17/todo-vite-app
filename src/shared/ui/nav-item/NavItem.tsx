import { classNames } from "shared/libs";
import css from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface NavItemProps {
	className?: string,
	to: string,
	children?: ReactNode
}

export const NavItem = ({ className, to, children }: NavItemProps) => {

    return (
        <NavLink
            className={({ isActive }) =>
                (classNames(css.wrapper, {
                    [css.active]: isActive
                }, [className]))}
            to={to}
        >
            {children}
        </NavLink>
    );
};
