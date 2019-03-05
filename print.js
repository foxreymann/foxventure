const cli = {}

cli.printState = state => {
  cli.printRoom(state.room)
  cli.printOptions(state.options)
}

cli.printRoom = room => {
  console.log(room.name)
  console.log('-'.repeat(room.name.length))
  console.log(room.desc)
  console.log('\n')
}

cli.printOptions = options => {
  options.map(o => {
    console.log(`(${o.key}) ${o.desc}`)
  })
  console.log('\n')
}

module.exports = { cli }
