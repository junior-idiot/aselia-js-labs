import React from "react";

type TabProps = {
    isActive: boolean,
    onClick: () => void,
    children: React.ReactNode,
};

export const Tab: React.FC<TabProps> = ({ isActive, onClick, children }) => {
    const activeClasses = isActive
        ? 'text-violet-600 border-violet-600'
        : 'text-gray-500 border-transparent';

    return (
        <div
            className={`cursor-pointer px-4 py-2 -mb-px font-semibold text-sm leading-tight uppercase border-b-2 transition duration-150 ease-in-out ${activeClasses}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};