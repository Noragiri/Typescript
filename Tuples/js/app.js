"use strict";
let myFirstTuple;
myFirstTuple = ["I'm a string", 100, null];
let game;
game = ["Tetris", 1981];
let games = [
    ["The Oregon Trail", 1981, "MS DOS"],
    ["Pong", 1972, "Atari"],
    ["Tetris", 1985],
];
let players = [["George Smith", games[1]]];
players.forEach(([playerName, [gameName, gameYear, gameConsole]]) => {
    console.log(`Player name:${playerName}\nGame name:${gameName}\nYear of game release:${gameYear}\nFor ${gameConsole}`);
});
