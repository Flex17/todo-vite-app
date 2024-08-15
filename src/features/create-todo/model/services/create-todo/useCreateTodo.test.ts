import { useCreateTodo } from "./useCreateTodo";
import { useTodoContext } from "entities/todo";
import { act, renderHook } from "@testing-library/react";


// Mock the useTodoContext function
jest.mock("entities/todo", () => ({
    useTodoContext: jest.fn(),
}));

describe("useCreateTodo", () => {
    const addTodo = jest.fn();

    beforeEach(() => {
        (useTodoContext as jest.Mock).mockReturnValue({ addTodo });
    });

    it("should initialize with empty title and description", () => {
        const { result } = renderHook(() => useCreateTodo());

        expect(result.current.title).toBe("");
        expect(result.current.description).toBe("");
        expect(result.current.isActive).toBe(false);
    });

    it("should update title and description", () => {
        const { result } = renderHook(() => useCreateTodo());

        act(() => {
            result.current.setTitle("New Title");
            result.current.setDescription("New Description");
        });

        expect(result.current.title).toBe("New Title");
        expect(result.current.description).toBe("New Description");
        expect(result.current.isActive).toBe(true);
    });
});
