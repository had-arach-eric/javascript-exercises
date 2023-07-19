const container = document.getElementById("container");

const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h3");
const p2 = document.createElement("p");

p.style.color = "red";
p.textContent = "Hey I'm red!";

h3.style.color = "blue";
h3.textContent = "I'm a blue h3";

div.style.border = "5px solid black";
div.style.backgroundColor = "pink";
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);


