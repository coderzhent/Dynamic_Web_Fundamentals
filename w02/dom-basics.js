const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "random image");
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSec = document.createElement("section");
const newH2 = document.createElement("h2");
const newP = document.createElement("p");
newH2.innerText = "DOM Basics"
newP.innerText = "This was added through Javascript"
newSec.appendChild(newH2);
newSec.appendChild(newP);
document.body.appendChild(newSec);

// Alternatively this could have been done like so:
// const newSec = document.createElement("section");
// newSec.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
// document.body.appendChild(newSec);