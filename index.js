//initialize count as 0
//listen for clicks on increment button
//increment count variable when button clicked
//change the count-el in HTML to reflect the new count 

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let counter = 0      
function increment() {              //A function which increases the count when function is called (via button)
    counter += 1
    countEl.textContent = counter
}

function save() {        //A function which saves the current count, displays it, and resets the counter 
    let countStr = counter + " - "
    saveEl.textContent += countStr
    counter = 0;
    countEl.textContent = counter
        console.log(countStr)
}
