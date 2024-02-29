import React from "react";
import { TodoFilters } from "../TodoFilters/todoFilters";
import { Todo } from "../Todo/todo";

export const TodoList = ({ todos, handledSetComplete, handleDelete }) => {
    return <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handledSetComplete={handledSetComplete}
                    handleDelete={handleDelete}
                />
            )
        })}
        <TodoFilters />
    </div>
}