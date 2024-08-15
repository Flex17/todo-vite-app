import { classNames } from "shared/libs";
import css from "./Logo.module.scss";
import { MainRouterPath } from "shared/config";
import { NavLink } from "react-router-dom";

interface LogoProps {
	className?: string,
}

export const Logo = ({ className }: LogoProps) => {

    return (
        <NavLink to={MainRouterPath.home} className={classNames("", {}, [className])}>
            <h1 className={css.title}>TODO APP</h1>
        </NavLink>
    );
};
