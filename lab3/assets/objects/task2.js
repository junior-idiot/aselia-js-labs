import {polygon} from "./polygon.js";

const getRectangleWidth = (polygonInfo) => {
    return Math.abs(polygonInfo.points.bottom.right.x - polygonInfo.points.top.left.x);
}

console.log(`Ширина прямоугольника: ${getRectangleWidth(polygon)}`);