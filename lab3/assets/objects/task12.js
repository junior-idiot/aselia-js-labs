import {polygon} from "./polygon.js";

const point = {
    x: 3,
    y: 5,

    toString() {
        return `(${this.x}, ${this.y})`;
    },
};

const outerPoint = {
    x: 12,
    y: 23,

    toString() {
        return `(${this.x}, ${this.y})`;
    },
};

const isPointInsideRectangle = (rectangle, point) => {
    return point.x >= rectangle.points.top.left.x &&
        point.x <= rectangle.points.bottom.right.x &&
        point.y <= rectangle.points.top.left.y &&
        point.y >= rectangle.points.bottom.right.y;
};

console.log(`Входит ли точка ${point.toString()} в прямоугольник: ${isPointInsideRectangle(polygon, point)}`);
console.log(`Входит ли точка ${outerPoint.toString()} в прямоугольник: ${isPointInsideRectangle(polygon, outerPoint)}`);