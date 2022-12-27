let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"
let listalinguagens = document.querySelector(".lista.linguagens");
listalinguagens.appendChild(elementoJavaScript);
console.log(elementoJavaScript);