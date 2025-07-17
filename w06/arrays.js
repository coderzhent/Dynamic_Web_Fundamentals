const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML


const grades = ['A', 'B', 'A'];
function gradeTemplate(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    } else if (grade === 'C') {
        points = 2;
    } else if (grade === 'D') {
        points = 1;
    }
    return points;
}

const gpaPoints = grades.map(gradeTemplate);
// const pointsTotal = gpaPoints.reduce(function (total, item) {
//     return total + item;
// });

// const gpa = pointsTotal / gpaPoints.length;

// alternatively:
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// Or:
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter((fruit) => fruit.length < 6);

const nums = [12, 34, 21, 54];
const luck = 21;
let luckyIndex = nums.indexOf(luck);

// let new_array = Array.map(function callback(currentValue[, index[, array]]) {
//     // return 
// }[, thisArg])

console.log("GPA:", gpa);
console.log("Short fruits:", shortFruits);
console.log("Lucky Index:", luckyIndex);