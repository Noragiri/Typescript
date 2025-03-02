"use strict";
// let ourFirstSet = new Set<string>(["Tetris", "Pong", "The Oregon Trail"]);
// console.log(ourFirstSet);
// console.log(typeof ourFirstSet);
let setOfGames = new Set();
setOfGames.add("Tetris");
setOfGames.add("Pong");
setOfGames.add("The Oregon Trail");
console.log(setOfGames);
console.log(setOfGames.has("Tetris"));
console.log(setOfGames.delete("tetris"));
for (let n of setOfGames) {
    console.log(n);
}
setOfGames.clear();
console.log(setOfGames);
