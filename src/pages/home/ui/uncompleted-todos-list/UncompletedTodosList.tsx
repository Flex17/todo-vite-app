import { classNames } from "shared/libs";
import { TodoCard, useTodoContext } from "entities/todo";
import css from "./UncompletedTodosList.module.scss";
import { SelectTodoCheckbox } from "features/manage-todo-selection";
import { DeleteTodoButton } from "features/delete-todo";

interface UncompletedTodosListProps {
	className?: string,
}

export const UncompletedTodosList = ({ className }: UncompletedTodosListProps) => {
    const { uncompletedTodos } = useTodoContext();

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            {
                uncompletedTodos?.length
                    ? uncompletedTodos.map(todo => {
                        return (
                            <TodoCard
                                key={todo.id}
                                selectAction={<SelectTodoCheckbox todoId={todo.id} completed={todo.completed}/>}
                                removeAction={<DeleteTodoButton todoId={todo.id}/>}
                                data={todo}
                            />
                        );
                    })
                    : <h3 className={css.not_found}>Нет незавершенных задач</h3>
            }
        </div>
    );
};
