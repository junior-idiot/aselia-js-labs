import {polygon} from "./polygon.js";

const printCoordinates = (polygonInfo) => {
    console.log(`Левая верхняя точка (x, y): (${polygonInfo.points.top.left.x}, ${polygonInfo.points.top.left.y})`);
    console.log(`Правая нижняя точка (x, y): (${polygonInfo.points.bottom.right.x}, ${polygonInfo.points.bottom.right.y})`);
};

printCoordinates(polygon);