const { singular } = require('pluralize')
const { bold } = require('irc-colors')
const config = require('./config')
const opened = (Client, {
  event,
  payload: {
    issue: { html_url, user: { login } },
    action
  }
}) => {
  const say = `@${bold(login)} ${action} an ${singular(event)}: ${html_url}`
  config.channels.forEach(chan => {
    Client.say(chan, say)
  })
}

module.exports = {
  opened
}
