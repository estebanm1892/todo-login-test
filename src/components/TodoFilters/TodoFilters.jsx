import React from "react";
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.component";

export const TodoFilters = ({
    total,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete
}) => {
    return <FiltersContainer>
        <ItemsLeft total={total} />
        <FilterButtonContainer>
            <FilterButton action={() => showAllTodos()} active={activeFilter} filter='all' />
            <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='active' />
            <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='completed' />
        </FilterButtonContainer>

        <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
            Clear Completed
        </button>
    </FiltersContainer>
}