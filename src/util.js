const { red, yellow, lightgreen, bold } = require('irc-colors')

const colorize = action => {
  const color = /closed/.test(action) ? red : /opened/.test(action) ? lightgreen : yellow
  return color(action)
}

const aOrAn = str => /^[aeiou]/.test(str) ? 'an' : 'a'

const stripSlashes = str => str.replace('_', ' ')

const getSayTemplate = (user, action, an, event, title, url) => (
  `${user} ${action} ${an} ${event}: "${title}" ${url}` // eslint-disable-line
)

module.exports = {
  aOrAn,
  colorize,
  stripSlashes,
  getSayTemplate,
  bold
}
