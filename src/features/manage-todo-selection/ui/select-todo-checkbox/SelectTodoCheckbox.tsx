import { classNames } from "shared/libs";
import { useTodoContext } from "entities/todo";
import css from "./SelectTodoCheckbox.module.scss";

interface SelectTodoCheckboxProps {
	todoId?: string,
	className?: string,
	completed?: boolean,
}

export const SelectTodoCheckbox = ({ className, todoId, completed }: SelectTodoCheckboxProps) => {
    const { completeTodo, uncompleteTodo } = useTodoContext();

    if (!todoId) {
        return null;
    }

    const handleTodoClick = () => {
        if (completed) {
            uncompleteTodo(todoId);
        } else {
            completeTodo(todoId);
        }
    };

    return (
        <input
            type="checkbox"
            checked={completed}
            className={classNames(css.wrapper, {}, [className])}
            onChange={handleTodoClick}
        />
    );
};
