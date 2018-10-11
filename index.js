const world = require('./worlds/default')
const game = require('./game')
const print = require('./print').cli

// init the game state
const state = game.initialState(world)

game.loop(state, print)
