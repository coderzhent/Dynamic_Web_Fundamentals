function getGrades(inputSelector) {
  const field = document.querySelector(inputSelector).value;
  const grades = field.toUpperCase().split(',').map((item) => item.trim());
  console.log("New Grades:", grades);
  return grades;
}

function lookupGrade(grade) {
    return grade === "A" ? 4 : grade === "B" ? 3 : grade === "C" ? 2 : grade === "D" ? 1 : 0;
}

function calculateGPA(grades) {
  const points = grades.map((grade) => lookupGrade(grade));
  console.log("Points:", points);
  return (points.reduce((total, point) => total + point) / points.length).toFixed(2);
}

function outputGPA(gpa, selector) {
  const field = document.querySelector(selector);
  field.innerText = "GPA: " + gpa;
}

function clickHandler() {
  // calculate the gpa from the grades entered
  // display the gpa
  const grades = getGrades("#grades");
  const gpa = calculateGPA(grades);
  outputGPA(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener('click', clickHandler);