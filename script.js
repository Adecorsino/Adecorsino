let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"
let listalinguagens = document.querySelector(".lista-linguagens");
listalinguagens.appendChild(elementoJavaScript);
const postagemJavaScript = document.createElement("div");
let div=document.querySelector("div");
div.style.color="green"
div.style.fontSize="16px"
console.log(elementoJavaScript);