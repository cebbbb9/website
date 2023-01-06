const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = ""
let passwordTwo = ""
let randNum = 0
let passwordOneEl = document.getElementById('password1-el')
let passwordTwoEl = document.getElementById('password2-el')

function generatePW() {
    passwordOne = ""
    for (let i=0; i < 15; i++) {
        randNum = Math.floor(Math.random() * 92)
        console.log(characters[randNum])
        passwordOne += characters[randNum]
    }
    passwordTwo = ""
    for (let i=0; i < 15; i++) {
        randNum = Math.floor(Math.random() * 92)
        passwordTwo += characters[randNum]
    }

    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo

}
