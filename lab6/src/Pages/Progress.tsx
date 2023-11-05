import React, {useState} from "react";
import {Card} from "../Components/Card/Card.tsx";
import {ProgressBar} from "../Components/ProgressBar/ProgressBar.tsx";
import {Button} from "../Components/Button/Button.tsx";
import {Input} from "../Components/Input/Input.tsx";

export const Progress: React.FC = () => {
    const [percent, setPercent] = useState<number>(0);
    const [step, setStep] = useState<number>(5);

    return (
        <div>
            <Card
                header={"Progress Bar"}
            >
                <div className={"flex my-5"}>
                    <div className={"w-[15%]"}>Progress step: </div>
                    <Input
                        type={"number"}
                        value={step}
                        onChange={(event) => setStep(+event.target.value)}
                    />
                </div>

                <ProgressBar value={percent} max={100}></ProgressBar>

                <div className={"flex justify-between"}>
                    <Button
                        onClick={() => {
                            setPercent(percent >= 100 ? 0 : percent + step);
                        }}
                    >
                        Add 5 percent
                    </Button>
                    <Button
                        onClick={() => {
                            setPercent(percent <= 0 ? 100 : percent - step);
                        }}
                    >
                        Remove 5 percent
                    </Button>
                </div>
            </Card>
        </div>
    );
}