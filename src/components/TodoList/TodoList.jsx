import React from "react";
import { TodoFilters } from "../TodoFilters/TodoFilters";
import { Todo } from "../Todo/Todo";

export const TodoList = ({
    todos,
    handleSetComplete,
    handleelete,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete }) => {
    return <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleSetComplete={handleSetComplete}
                    handleelete={handleelete}
                />
            )
        })}
        <TodoFilters
            activeFilter={activeFilter}
            total={todos.length}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete}

        />
    </div>
}