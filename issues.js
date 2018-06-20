const { singular } = require('pluralize')
const { red, lightgreen, bold } = require('irc-colors')
const issues = async (client, {
  event,
  payload: {
    issue: { title, html_url, user: { login } },
    action
  }
}) => {
  const user = `${bold('@' + login)}`
  const color = (action === 'opened') ? lightgreen : red
  const say = `${user} ${bold(color(action))} an ${singular(event)}: "${title}" ${html_url}`
  Object.keys(client.chans).map(chan => client.say(chan, say))
}

module.exports = { issues }
