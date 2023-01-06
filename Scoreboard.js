let homeEl = document.getElementById('homeEl')
console.log(homeEl)
let awayEl = document.getElementById('awayEl')
console.log(awayEl)

let counterHome = 0;
let counterAway = 0;
function add1Home() {
    counterHome += 1;
    homeEl.textContent = counterHome;
}
function add2Home() {
    counterHome += 2
    homeEl.textContent = counterHome;
}
function add3Home() {
    counterHome += 3
    homeEl.textContent= counterHome;
}
function add1Away() {
    counterAway +=1;
    awayEl.textContent= counterAway;
}
function add2Away() {
    counterAway +=2;
    awayEl.textContent= counterAway;
}
function add3Away() {
    counterAway +=3;
    awayEl.textContent= counterAway;
}