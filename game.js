const readline = require('readline');

const initialState = world => ({
  location: {
    x: 0,
    y: 0
  },
  room: world.rooms.find(room => 0 === room.location.x && 0 === room.location.y),
  world: world
})

// Constants
const NORTH = { x: 0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }

const moves = [
  {
    name: 'North',
    x: 0,
    y: 1
  },
  {
    name: 'South',
    x: 0,
    y: -1
  },
  {
    name: 'East',
    x: 1,
    y: 0
  },
  {
    name: 'West',
    x: -1,
    y: 0
  }
]

const quit = () => {
  process.exit()
}

const generateOptions = state => {
  const options = [
    {
      key: 'q',
      desc: 'Quit',
      action: quit
    }
  ]

  // map moves and add if available
  moves.map(move => {
console.log(move)
    const locAfterMove = {
      x: state.location.x + move.x,
      y: state.location.y + move.y
    }
    // is there a room at locAfterMove
    const roomAfterMove = state.world.rooms.filter(room => room.location.x === locAfterMove.x && room.location.y === locAfterMove.y)
console.log(roomAfterMove)
    if(roomAfterMove.length) {

    }
  })

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
    // process user input
    if (key.ctrl && key.name === 'c') process.exit()
    try {
      key = key.name.toLowerCase()
    } catch (err) {}
    options.map(o => {
      if(key === o.key) {
        o.action(state)
      }
    })
  })
}

module.exports = { initialState, loop }
