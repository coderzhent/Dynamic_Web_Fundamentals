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
    }
    return points;
}

const gpaPoints = grades.map(gradeTemplate);




let new_array = Array.map(function callback(currentValue[, index[, array]]) {
    return 
}[, thisArg])