import { useState } from "react";
import { ITodo } from "../types/types.ts";

export const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: ITodo) => {
        setTodos(prev => [...prev, todo]);
    };

    const completeTodo = (id: string) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: true
                };
            }
            return todo;
        }));
    };

    const uncompleteTodo = (id: string) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: false
                };
            }
            return todo;
        }));
    };

    const removeTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const completedTodos = todos.filter((todo) => todo.completed);

    const uncompletedTodos = todos.filter((todo) => !todo.completed);

    return {
        todos,
        completedTodos,
        uncompletedTodos,
        addTodo,
        removeTodo,
        completeTodo,
        uncompleteTodo,
    };
};
