import React, {useState} from "react";
import {Card} from "../Components/Card/Card.tsx";
import {Button} from "../Components/Button/Button.tsx";

export const Counter: React.FC = () => {
    const [random, setRandom] = useState<number>();

    return (
        <div className={""}>
            <Card
                header={"Random number:"}
                isCompact
            >
                <div className="text-3xl font-bold text-violet-600 mb-6 text-center">
                    {random}
                </div>
                <Button
                    onClick={() => {
                        const randomNumber = Math.round(Math.random() * 100);

                        setRandom(randomNumber);
                    }}
                >
                    Generate random number
                </Button>
            </Card>
        </div>

        /*<div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-xl rounded-lg p-6">
                <div className="text-lg font-medium mb-4">Random number:</div>
                <div className="text-3xl font-bold text-blue-500 mb-6">
                    {random}
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        const randomNumber = Math.round(Math.random() * 100);

                        setRandom(randomNumber);
                    }}
                >
                    Generate random number
                </button>
            </div>
        </div>*/
    );
}