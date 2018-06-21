const { singular } = require('pluralize')
const { style, bold, strip } = require('./util')

module.exports = async (client, {
  event,
  payload: {
    pull_request: { title, html_url, user: { login } },
    action
  }
}) => {
  const user = `${bold('@' + login)}`
  const _action = style(action)
  const _event = strip(singular(event))
  const say = `${user} ${_action} a ${_event}: "${title}" ${html_url}` // eslint-disable-line
  Object.keys(client.chans).map(chan => client.say(chan, say))
}
