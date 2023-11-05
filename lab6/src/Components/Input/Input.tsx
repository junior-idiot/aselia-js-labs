import React, {InputHTMLAttributes} from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {};

export const Input: React.FC<InputType> = ({...props}) => {
    return (
        <input
            {...props}
            className="form-input px-4 py-2 w-full border-2 rounded-lg border-violet-600 focus:outline-none focus:border-violet-800 focus:ring-1 focus:ring-violet-800"
        />
    );
}