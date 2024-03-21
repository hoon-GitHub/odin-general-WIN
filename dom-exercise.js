const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// 1. add a <p> in red
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

// 2. add a <h3> in blue
const hd3 = document.createElement("h3");
hd3.textContent = "I'm a blue h3!";
hd3.style.color = "blue";
container.appendChild(hd3);

// 3. add a <div> with sub contents
const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border-style: solid; background-color: pink");
container.appendChild(newDiv);

const newDivHd1 = document.createElement("h1");
newDivHd1.textContent = "I'm in a div";
newDiv.appendChild(newDivHd1);

const newDivPara = document.createElement("p");
newDivPara.textContent = "ME TOO!";
newDiv.appendChild(newDivPara);

