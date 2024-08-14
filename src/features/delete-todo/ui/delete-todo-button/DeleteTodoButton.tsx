import { classNames } from "shared/libs";
import TrashIcon from "../../assets/trash-icon.svg";
import css from "./DeleteTodoButton.module.scss";
import { useTodoContext } from "entities/todo";

interface DeleteTodoButtonProps {
	className?: string,
    todoId?: string,
}

export const DeleteTodoButton = ({ className, todoId }: DeleteTodoButtonProps) => {
    const { removeTodo } = useTodoContext();

    if (!todoId) return null;

    const onRemoveTodo = () => removeTodo(todoId);

    return (
        <button
            type="button"
            onClick={onRemoveTodo}
            aria-label="Удалить задачу"
            className={classNames(css.wrapper, {}, [className])}
        >
            <TrashIcon width={20} height={20}/>
        </button>
    );
};
