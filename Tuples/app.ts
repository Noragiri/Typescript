let myFirstTuple: [string, number, object | null, boolean?];

myFirstTuple = ["I'm a string", 100, null];

let game: readonly [string, number];

game = ["Tetris", 1981];

type Game = [string, number, string?]; // Name, Year of Release, Target Console
type Player = [string, Game];

let games: Game[] = [
  ["The Oregon Trail", 1981, "MS DOS"],
  ["Pong", 1972, "Atari"],
  ["Tetris", 1985],
];

let players: Player[] = [["George Smith", games[1]]];

players.forEach(([playerName, [gameName, gameYear, gameConsole]]) => {
  console.log(
    `Player name:${playerName}\nGame name:${gameName}\nYear of game release:${gameYear}\nFor ${gameConsole}`
  );
});
