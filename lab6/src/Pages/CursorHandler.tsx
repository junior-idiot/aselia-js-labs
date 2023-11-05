import React, {useState} from "react";

type Coords = {
    x: number,
    y: number,
}

export const CursorHandler: React.FC = () => {
    const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
    const [button, setButton] = useState<string | null>(null);

    return (
        <div className={"h-[80vh] bg-violet-100 rounded-lg m-10"}
             onMouseMove={(event) => {
                 setCoords({
                     x: event.clientX,
                     y: event.clientY,
                 });
             }}
             onClick={(event) => {
                 switch (event.button) {
                     case 0:
                         setButton('left button');
                         break;
                     case 2:
                         setButton('right button');
                         break;
                     default:
                         setButton(null); // Для других кнопок мыши
                 }
             }}
             onContextMenu={(e) => {
                 e.preventDefault();
                 setButton('right button');
             }}
        >
            <div className={"absolute top-[45%] left-[40%] text-violet-500 text-center"}>
                <div>Cursor coordinates: x: {coords.x} y: {coords.y}</div>
                <div> Button clicked: {button}</div>
            </div>
        </div>
    );
}