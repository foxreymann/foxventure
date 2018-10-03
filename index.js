const world = require('./worlds/default')
const Game = require('./game')

console.log(world)

let quit = false

// init the game state
const State = Game.initialState(world)

console.log(State)

// print initial state

while (!quit) {
  // wait for user input

  // process user input

  // print state
}
