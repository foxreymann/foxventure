const readline = require('readline');

const initialState = world => ({
  location: {
    x: 0,
    y: 0
  },
  room: world.rooms.find(room => 0 === room.location.x && 0 === room.location.y)
})

// Constants
const NORTH = { x: 0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }

const quit = () => {
  process.exit()
}

const generateOptions = state => {
  const options = [
    {
      key: 'q',
      desc: 'Quit',
      fun: 'quit'
    }
  ]
  return options
}

const loop = (state, print) => {
  // print state
  print.printState(state)

  // generate options
  const options = generateOptions(state)

  // print options
  print.printOptions(options)

  // wait for user input
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit()
    try {
      key = key.name.toLowerCase()
    } catch (err) {}
console.log(key)
  });

  // process user input

  const nextState = state
  // loop(nextState, print)
}

module.exports = { initialState, loop }
