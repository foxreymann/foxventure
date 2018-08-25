const items = []

items[] = {
  name: 'Book'
}

const rooms = []

rooms[] = {
  name: "The pub",
  desc: 'The pub is full of drunken revellers - the war against the orks has been won, and the fighting heroes have returned home',
  location: {
    x: 0,
    y: 0
  }
}

rooms[] = {
  name: "Your house",
  desc: 'Your house overlooks the Lamb and Lion pub, which makes it easy to stumble home when drunk.',
  location: {
    x: 0,
    y: 1
  }
}

rooms[] = {
  name: "room x0 y2",
  desc: 'description for room x0 y2',
  location: {
    x: 0,
    y: 2
  }
}

rooms[] = {
  name: "room x0 y3",
  desc: 'description for room x0 y3',
  location: {
    x: 0,
    y: 3
  }
}

rooms[] = {
  name: "room x1 y0",
  desc: 'description for room x1 y0',
  location: {
    x: 1,
    y: 0
  }
}

rooms[] = {
  name: "room x-1 y0",
  desc: 'description for room x-1 y0',
  location: {
    x: -1,
    y: 0
  }
}


module.exports = rooms
