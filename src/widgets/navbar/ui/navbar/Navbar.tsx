import { classNames } from "shared/libs";
import css from "./Navbar.module.scss";
import { NavItem } from "shared/ui";
import { MainRouterPath } from "shared/config";
import { Logo } from "../logo/Logo.tsx";

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(css.wrapper, {}, [className])}>
            <Logo/>
            <div className={css.links}>
                <NavItem to={MainRouterPath.home}>Незавершенные</NavItem>
                <NavItem to={MainRouterPath.completed}>Завершенные</NavItem>
            </div>
        </nav>
    );
};
