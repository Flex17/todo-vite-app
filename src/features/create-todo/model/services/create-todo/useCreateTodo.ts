import { useTodoContext } from "entities/todo";
import { FormEventHandler, useState } from "react";

export const useCreateTodo = () => {
    const { addTodo } = useTodoContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const clearForm = () => {
        setTitle("");
        setDescription("");
    };

    const onAddTodo: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const todo = {
            id: Date.now().toString(),
            title,
            description,
            completed: false,
        };

        addTodo(todo);

        clearForm();
    };

    return {
        title,
        description,
        setTitle,
        setDescription,
        onAddTodo,
        isActive: title.length > 0
    };
};
