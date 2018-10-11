const items = [
  {
    name: 'Book'
  }
]

const rooms = [
  {
    name: "The pub",
    desc: 'The pub is full of drunken revellers - the war against the orks has been won, and the fighting heroes have returned home',
    loc: {
      x: 0,
      y: 0
    }
  },
  {
    name: "Your house",
    desc: 'Your house overlooks the Lamb and Lion pub, which makes it easy to stumble home when drunk.',
    loc: {
      x: 0,
      y: 1
    }
  },
  {
    name: "room x0 y2",
    desc: 'description for room x0 y2',
    loc: {
      x: 0,
      y: 2
    }
  },
  {
    name: "room x0 y3",
    desc: 'description for room x0 y3',
    loc: {
      x: 0,
      y: 3
    }
  },

  {
    name: "room x1 y0",
    desc: 'description for room x1 y0',
    loc: {
      x: 1,
      y: 0
    }
  },

  {
    name: "room x-1 y0",
    desc: 'description for room x-1 y0',
    loc: {
      x: -1,
      y: 0
    }
  }
]


module.exports = { rooms, items }
