const cli = {}

cli.printState = state => {
  console.log(state.room.name)
  console.log('-'.repeat(state.room.name.length))
  console.log(state.room.desc)
  console.log('\n')
}

cli.printOptions = options => {
  options.map(o => {
    console.log(`(${o.key}) ${o.desc}`)
  })
}

module.exports = { cli }
