import { ITodo } from "entities/todo/model/types/types.ts";
import { act, renderHook } from "@testing-library/react";
import { useTodos } from "./useTodos.ts";

const todo1: ITodo = { id: "1", title: "Test Todo 1", completed: false };
const todo2: ITodo = { id: "2", title: "Test Todo 2", completed: true };

describe("useTodos hook", () => {
    it("should initialize with an empty todo list", () => {
        const { result } = renderHook(() => useTodos());

        expect(result.current.todos).toEqual([]);
        expect(result.current.completedTodos).toEqual([]);
        expect(result.current.uncompletedTodos).toEqual([]);
    });

    it("should add a todo", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo(todo1);
        });

        expect(result.current.todos).toEqual([todo1]);
        expect(result.current.uncompletedTodos).toEqual([todo1]);
        expect(result.current.completedTodos).toEqual([]);
    });

    it("should complete a todo", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo(todo1);
            result.current.completeTodo(todo1.id);
        });

        expect(result.current.todos[0].completed).toBe(true);
        expect(result.current.completedTodos.map(todo => todo.id)).toEqual([todo1.id]);
        expect(result.current.uncompletedTodos).toEqual([]);
    });

    it("should uncomplete a todo", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo(todo2);
            result.current.uncompleteTodo(todo2.id);
        });

        expect(result.current.todos[0].completed).toBe(false);
        expect(result.current.completedTodos).toEqual([]);
        expect(result.current.uncompletedTodos.map(todo => todo.id)).toEqual([todo2.id]);
    });

    it("should remove a todo", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo(todo1);
            result.current.addTodo(todo2);
            result.current.removeTodo(todo1.id);
        });

        expect(result.current.todos).toEqual([todo2]);
        expect(result.current.completedTodos).toEqual([todo2]);
        expect(result.current.uncompletedTodos).toEqual([]);
    });
});
