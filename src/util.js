const { red, yellow, lightgreen, bold } = require('irc-colors')
const style = action => {
  const color = /closed/.test(action) ? red : /opened/.test(action) ? lightgreen : yellow
  return bold(color(action))
}

const strip = str => str.replace('_', ' ')

module.exports = {
  style,
  strip,
  bold
}
