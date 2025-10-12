//<p format="italic"><i>Sample Italic Text</i></p>
const demoEl = document.getElementById("demo")

//1. append <p> under <div id="demo">
let firstElement = document.createElement("p")
let secondElement = document.createElement("p")
let thirdElement = document.createElement("p")

//1.5 add format='italic' attribute to <p>
firstElement.setAttribute("format","italic")
secondElement.setAttribute("format","italic")
thirdElement.setAttribute("format","italic")

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
firstElement.innerHTML = '<i>Sample italic Text</i>'
//2.2  add <i>Sample Italic Text</i> with innerText
secondElement.innerText = '<i>Sample italic Text</i>'
//2.3 add <i>Sample Italic Text</i> with textContent
thirdElement.textContent = '<i>Sample italic Text</i>'

demoEl.appendChild(firstElement)
demoEl.appendChild(secondElement)
demoEl.appendChild(thirdElement)