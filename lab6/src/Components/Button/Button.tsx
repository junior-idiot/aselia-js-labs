import React, {ButtonHTMLAttributes} from "react";
import {ButtonType} from "./types.ts";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    buttonType?: ButtonType,
}

export const Button: React.FC<ButtonProps> = ({children, buttonType = "primary", ...props}) => {
    return (
        <button
            {...props}
            className={`${buttonType} font-bold mr-1 py-2 px-4 rounded`}
        >
            {children}
        </button>
    );
}