// initialize count as 0
//listen for clicks on increment button
//increment count variable when button clicked
//change the count-el in HTML to reflect the new count 
let countEl = document.getElementById("count-el")

console.log(countEl)

let counter = 0
function increment() {
    counter += 1
    countEl.innerText = counter
    console.log(counter)
}