const PI = 3.14;
// let radius = 3;
let area = 0;
// area = radius * radius * PI;
// console.log("Area: ", area, "with radius: ", radius);
// radius = 4;
// area = radius * radius * PI;
// console.log("Area: ", area, "with radius: ", radius);

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("Area: ", area, "with radius: ", 3);
area = circleArea(4);
console.log("Area: ", area, "with radius: ", 4);
