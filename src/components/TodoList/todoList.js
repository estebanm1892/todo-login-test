import React from "react";
import { TodoFilters } from "../TodoFilters/todoFilters";

export const TodoList = ({ children }) => {
    return <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {children}
        <TodoFilters />
    </div>
}