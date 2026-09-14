const redP = document.createElement('p');
redP.classList.add('red');
redP.textContent = 'Hey i m red';
redP.style.color = 'red';

const blueH3 = document.createElement('h3');
blueH3.classList.add('blue');
blueH3.textContent = 'I’m a blue h3!'
blueH3.style.color = 'blue';

const Darkdiv = document.createElement('div');
Darkdiv.classList.add('dark');
Darkdiv.style.border = '4px solid black';
Darkdiv.style.backgroundColor = 'pink';
// Darkdiv.style.width = '200px';
// Darkdiv.style.height = '200px';


const innerH1 = document.createElement('h1');
innerH1.textContent = "i'm in a div";

const innerP = document.createElement('p');
innerP.textContent = "ME TOO";

Darkdiv.appendChild(innerH1);
Darkdiv.appendChild(innerP);

document.body.appendChild(redP);

document.body.appendChild(blueH3);

document.body.appendChild(Darkdiv);

console.log()
var j = 2 + 2;
// console.log(j);

 

// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);






