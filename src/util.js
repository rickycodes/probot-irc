const { red, yellow, lightgreen, bold } = require('irc-colors')

const colorize = action => {
  const color = /closed/.test(action) ? red : /opened/.test(action) ? lightgreen : yellow
  return color(action)
}

const aOrAnEvent = str => `${/^[aeiou]/.test(str) ? 'an' : 'a'} ${str}`

const stripUnderscores = str => str.replace(/_/g, ' ')

const getSayTemplate = (user, action, anevent, title, url) => (
  `${user} ${action} ${anevent}: "${title}" ${url}` // eslint-disable-line
)

module.exports = {
  aOrAnEvent,
  colorize,
  stripUnderscores,
  getSayTemplate,
  bold
}
