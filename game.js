const initialState = world => ({
  location: {
    x: 0,
    y: 0
  },
  room: world.rooms.find(room => 0 === room.location.x && 0 === room.location.y)
})

module.exports = { initialState }
