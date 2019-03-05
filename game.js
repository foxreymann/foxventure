const readline = require('readline');

const initialState = world => {
  const state = {
    loc: {
      x: 0,
      y: 0
    },
    world: world
  }

  state.room = world.rooms.find(room => state.loc.x === room.loc.x && state.loc.y === room.loc.y)

  state.options = generateOptions(state)

  return state
}

const makeMove = (state, loc) => {
  const nextState = {...state}

  nextState.loc = loc
  nextState.room = state.world.rooms.find(room => loc.x === room.loc.x && loc.y === room.loc.y)
  nextState.options = generateOptions(nextState)

  return nextState
}

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
  let myState = Object.assign({}, state)

  // print state
  print.printState(myState);

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
    myState.options.map(o => {
      if(key === o.key) {
        myState = o.action(myState, o.loc)
        // print state
        print.printState(myState)
      }
    })
  })
}

module.exports = { initialState, loop }
