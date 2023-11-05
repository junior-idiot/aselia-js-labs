import React, {ReactNode} from "react";

type CardProps = {
    header: string,
    children: ReactNode,
    isCompact?: boolean,
};

export const Card: React.FC<CardProps> = ({header, isCompact = false, ...props}) => {
    return (
        <div className={`flex flex-col ${isCompact ? 'items-center' : ''} justify-center p-4`}>
            <div className="bg-white shadow-xl rounded-lg p-6">
                <div className="text-lg font-medium mb-4">{header}</div>
                {props.children}
            </div>
        </div>
    );
}