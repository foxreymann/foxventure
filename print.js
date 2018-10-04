const cli = {}

cli.printState = state => {
  console.log(state.room.name)
  console.log('-'.repeat(state.room.name.length))
  console.log(state.room.desc)
}

module.exports = { cli }
