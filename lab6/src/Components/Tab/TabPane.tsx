import React from "react";

type TabPaneProps = {
    title: string;
    children: React.ReactNode;
};

export const TabPane: React.FC<TabPaneProps> = ({ children }) => <div>{children}</div>;
