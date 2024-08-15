import { classNames } from "shared/libs";
import css from "./CompletedTodosList.module.scss";
import { TodoCard, useTodoContext } from "entities/todo";
import { DeleteTodoButton } from "features/delete-todo";
import { SelectTodoCheckbox } from "features/manage-todo-selection";

interface CompletedTodosListProps {
	className?: string,
}

export const CompletedTodosList = ({ className }: CompletedTodosListProps) => {
    const { completedTodos } = useTodoContext();

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            {
                completedTodos?.length
                    ? (
                        completedTodos.map(todo => {
                            return (
                                <TodoCard
                                    key={todo.id}
                                    data={todo}
                                    selectAction={<SelectTodoCheckbox completed={true} todoId={todo.id}/>}
                                    removeAction={<DeleteTodoButton todoId={todo.id}/>}
                                />
                            );
                        })
                    )
                    : <h3 className={css.not_found}>Нет завершенных задач</h3>
            }
        </div>
    );
};
