const rooms = []

rooms[] = {
}

rooms[] = {
  name: 'The pub',
  desc: 'The pub is full of drunken revellers - the war against the orks has been won, and the fighting heroes have returned home',
        <NORTH>1</NORTH>
        <SOUTH>2</SOUTH>
        <WEST>3</WEST>
        <EAST>4</EAST>
        <ITEM>1</ITEM>
}

rooms[] = {
  name: 'Your house',
  desc: 'Your house overlooks the Lamb and Lion pub, which makes it easy to stumble home when drunk.',
        <NORTH>-</NORTH>
        <SOUTH>0</SOUTH>
        <WEST>6</WEST>
        <EAST>7</EAST>
        <ITEM>-</ITEM>
}

rooms[] = {
  name: 'A shady alley',
  desc: 'The alley is dark with a peculiar mist making it hard to see the other side. You can hear someone whistling poorly.',
        <NORTH>0</NORTH>
        <SOUTH>5</SOUTH>
        <WEST>-</WEST>
        <EAST>-</EAST>
        <ITEM>-</ITEM>
}

rooms[] = {
  name: 'Castle',
  desc: 'The castle was built hundreds of years ago when the city was much richer than it is now.',
        <NORTH>6</NORTH>
        <SOUTH>-</SOUTH>
        <WEST>-</WEST>
        <EAST>0</EAST>
        <ITEM>2</ITEM>
}

rooms[] = {
  name: 'City walls',
  desc: 'The city walls are eight metres high and two thick, and have kept invaders out for centuries.',
        <NORTH>7</NORTH>
        <SOUTH>-</SOUTH>
        <WEST>0</WEST>
        <EAST>-</EAST>
        <ITEM>-</ITEM>
}

rooms[] = {
  name: 'Misty alley',
  desc: 'A dangerous-looking man stands before you holding a small dagger. "Come any closer and I kill yer!"',
        <NORTH>2</NORTH>
        <SOUTH>-</SOUTH>
        <WEST>-</WEST>
        <EAST>-</EAST>
        <ITEM>-</ITEM>
}

rooms[] = {
  name: 'Stables',
  desc: 'The stables are full of sleeping horses, but at least it is nice and warm in here.',
        <NORTH>-</NORTH>
        <SOUTH>3</SOUTH>
        <WEST>-</WEST>
        <EAST>1</EAST>
        <ITEM>-</ITEM>
}

rooms[] = {
  name: 'Gardens',
  desc: 'The gardens are peaceful and surprisingly of flowers for this time of year.',
        <NORTH>-</NORTH>
        <SOUTH>4</SOUTH>
        <WEST>1</WEST>
        <EAST>-</EAST>
        <ITEM>-</ITEM>
}

module.exports = config
