const world = require('./worlds/default')
const Game = require('./game')

console.log(world)

const quit = false

// init the game state
let State = Game.initialState(world)

// print initial state

while (!quit) {
  // wait for user input
  quit = true
}
