const world = require('./worlds/default')
const game = require('./game')
const print = require('./print').cli

console.log(world)

// init the game state
const state = game.initialState(world)

console.log(state)

game.loop(state, print)

