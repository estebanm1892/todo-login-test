import React from "react";

export const FilteresContainer = ({ children }) => {
    return <div className="flex items-center justify-between p-4 bg-gray-700 border-b border solid border-gray-600">
        {children}
    </div>
}

export const ItemsLeft = ({ total = 0 }) => {
    return <p className="text-gray-400 text-sm">
        {total} items left
    </p>
}

export const FilterButtonContainer = ({ children }) => {
    return <div className="flex items-center space-x-2">
        {children}
    </div>
}

export const FilterButton = ({ action, active, filter }) => {
    return <button className={`hover: text-white curson-pointer transition-all duration-300 ease-in-out `
        + (active.toLowerCase().includes(filter.toLowerCase()) ? `text-blue-500` : `text-gray-400`)
    }>
        {filter}
    </button>
}