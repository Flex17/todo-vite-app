import { classNames } from "shared/libs";
import { Button, Input } from "shared/ui";
import { useCreateTodo } from "../../model/services/create-todo/useCreateTodo.ts";
import css from "./CreateTodoForm.module.scss";

interface CreateTodoFormProps {
	className?: string,
}

export const CreateTodoForm = ({ className }: CreateTodoFormProps) => {
    const { title, setTitle, setDescription, description, onAddTodo, isActive } = useCreateTodo();

    return (
        <form className={classNames(css.wrapper, {}, [className])} onSubmit={onAddTodo}>
            <h2 className={css.title}>Создать новую задачу</h2>
            <div className={css.inputs}>
                <Input value={title} setValue={setTitle} label="Название"/>
                <Input value={description} setValue={setDescription} label="Описание"/>
            </div>
            <Button disabled={!isActive} aria-label="Создать задачу" type="submit">Создать задачу</Button>
        </form>
    );
};
