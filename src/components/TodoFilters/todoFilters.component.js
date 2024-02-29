import React from "react";

export const FilteresContainer = ({ children }) => {
    return <div className="flex items-center justify-between p-4 bg-gray-700 border-b border solid border-gray-600">
        {children}
    </div>
}