const { singular } = require('pluralize')
const { red, lightgreen, bold } = require('irc-colors')

module.exports = async (client, {
  event,
  payload: {
    issue: { title, html_url, user: { login } },
    action
  }
}) => {
  const user = `${bold('@' + login)}`
  const color = (action === 'closed') ? red : lightgreen
  const _action = bold(color(action))
  const _event = singular(event)
  const say = `${user} ${_action} an ${_event}: "${title}" ${html_url}` // eslint-disable-line
  Object.keys(client.chans).map(chan => client.say(chan, say))
}
