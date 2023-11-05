import React, {useState} from "react";
import {Tab} from "./Tab.tsx";

type TabsProps = {
    children: React.ReactNode,
};

export const Tabs: React.FC<TabsProps> = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col">
            <div className="flex border-b">
                {React.Children.map(children, (child, index) =>
                    React.isValidElement(child) ? (
                        <Tab
                            isActive={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                        >
                            {child.props.title}
                        </Tab>
                    ) : null
                )}
            </div>
            <div className="pt-4">
                {React.Children.map(children, (child, index) =>
                    index === activeIndex ? child : null
                )}
            </div>
        </div>
    );
}