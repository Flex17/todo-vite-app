import { classNames } from "shared/libs";
import css from "./Navbar.module.scss";
import { NavItem } from "shared/ui";

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const a = "";
    return (
        <nav className={classNames(css.wrapper, {}, [className])}>
            <h1 className={css.title}>TODO APP</h1>
            <div className={css.links}>
                <NavItem to="/">Незавершенные</NavItem>
                <NavItem to="/completed">Завершенные</NavItem>
            </div>
        </nav>
    );
};
