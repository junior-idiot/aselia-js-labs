import React, {ProgressHTMLAttributes} from "react";
import "./progressBar.css"

type ProgressBarProps = ProgressHTMLAttributes<HTMLProgressElement> & {};

export const ProgressBar: React.FC<ProgressBarProps> = ({...props}) => {
    return (
        <progress {...props} className={"w-full progress-bar"}></progress>
    );
}