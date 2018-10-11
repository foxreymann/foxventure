const readline = require('readline');

const initialState = world => ({
  loc: {
    x: 0,
    y: 0
  },
  room: world.rooms.find(room => 0 === room.loc.x && 0 === room.loc.y),
  world: world
})

const makeMove = (state, loc) => {
  const nextState = {
    loc: loc,
    world: state.world
  }

  nextState.room = state.world.rooms.find(room => loc.x === room.loc.x && loc.y === room.loc.y)

  return nextState
}

// Constants
const NORTH = { x: 0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }

const moves = [
  {
    key: 'n',
    desc: 'North',
    x: 0,
    y: 1
  },
  {
    key: 's',
    desc: 'South',
    x: 0,
    y: -1
  },
  {
    key: 'e',
    desc: 'East',
    x: 1,
    y: 0
  },
  {
    key: 'w',
    desc: 'West',
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
    const locAfterMove = {
      x: state.loc.x + move.x,
      y: state.loc.y + move.y
    }
    // is there a room at locAfterMove
    let roomAfterMove = state.world.rooms.filter(room => room.loc.x === locAfterMove.x && room.loc.y === locAfterMove.y)
    if(roomAfterMove.length) {
      roomAfterMove = roomAfterMove[0]
      // add move
      options.push({
        key: move.key,
        desc: `${move.desc}: ${roomAfterMove.name}`,
        action: makeMove,
        loc: locAfterMove
      })
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
    if (key === 'return') console.log('\n\n')
    options.map(o => {
      if(key === o.key) {
        const nextState = o.action(state, o.loc)
        loop(nextState, print)
      }
    })
  })
}

module.exports = { initialState, loop }
