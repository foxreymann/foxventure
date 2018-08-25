const world = require('./worlds/default')
const Game = require('./gmae')

console.log(world)

const quit = false

// init the game state
let State = Game.initialState(world)

// print initial state

while (!quit) {
  // wait for user input
  quit = true
}
