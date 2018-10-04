const initialState = world => ({
  location: {
    x: 0,
    y: 0
  },
  room: world.rooms.find(room => 0 === room.location.x && 0 === room.location.y)
})

const loop = (state, print) => {
  // print state
  print.printState(state)

  // ask initial question

  // wait for user input

  // process user input
  // loop(state, print)
}

module.exports = { initialState, loop }
