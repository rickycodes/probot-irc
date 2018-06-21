const { singular } = require('pluralize')
const { style, bold } = require('./util')

module.exports = async (client, {
  event,
  payload: {
    issue: { title, html_url, user: { login } },
    action
  }
}) => {
  const user = `${bold('@' + login)}`
  const _action = style(action)
  const _event = singular(event)
  const say = `${user} ${_action} an ${_event}: "${title}" ${html_url}` // eslint-disable-line
  Object.keys(client.chans).map(chan => client.say(chan, say))
}
