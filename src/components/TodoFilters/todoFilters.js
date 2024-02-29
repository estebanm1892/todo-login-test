import React from "react";
import { FilterButton, FilterButtonContainer, FilteresContainer, ItemsLeft } from "./todoFilters.component";

export const TodoFilters = () => {
    return <FilteresContainer>
        <ItemsLeft />
        <FilterButtonContainer>
            <FilterButton action={()=> {}} active="All" filter='All' />
            <FilterButton action={()=> {}} active="All" filter='Active' />
            <FilterButton action={()=> {}} active="All" filter='Completed' />
        </FilterButtonContainer>
    </FilteresContainer>
}