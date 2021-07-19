// Code JavaScript always with camelCase 
// DOM (Document Object Model) = How to use Javascript to modify yor website
// document is of the data type object

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    currentEntry = count + " - "
    saveEl.textContent += currentEntry  
    countEl.textContent = 0
    count = 0
}

