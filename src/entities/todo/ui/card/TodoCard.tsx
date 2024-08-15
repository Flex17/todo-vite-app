import { ReactNode } from "react";
import { classNames, Mods } from "shared/libs";
import { ITodo } from "../../model/types/types.ts";
import css from "./TodoCard.module.scss";

interface TodoCardProps {
	className?: string
	data?: ITodo,
	selectAction?: ReactNode,
	removeAction?: ReactNode,
}

export const TodoCard = ({ className, data, removeAction, selectAction }: TodoCardProps) => {
    if (!data) {
        return null;
    }

    const { title, description, completed } = data;

    const textMods: Mods = {
        [css.completed]: completed,
    };

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <div className={css.main_part}>
                <div>
                    {selectAction}
                </div>
                <div className={css.text_wrapper}>
                    <h3 className={classNames("", textMods)}>{title}</h3>
                    {
                        description && <p className={classNames("", textMods)}>{description}</p>
                    }
                </div>
            </div>
            {removeAction}
        </div>
    );
};
