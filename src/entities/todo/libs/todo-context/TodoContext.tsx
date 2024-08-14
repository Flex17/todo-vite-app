import { createContext, ReactNode, useContext } from "react";
import { useTodos } from "../../model/api/useTodos.ts";

type TodosContextType = ReturnType<typeof useTodos> | undefined;

const TodoContext = createContext<TodosContextType>(undefined);

interface TodoProviderProps {
	children: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const todos = useTodos();

    return (
        <TodoContext.Provider value={todos}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error("Контекст не определен");
    }
    return context;
};
