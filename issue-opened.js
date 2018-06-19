const { singular } = require('pluralize')
const { lightgreen, bold } = require('irc-colors')
const config = require('./config')
const opened = async (Client, {
  event,
  payload: {
    issue: { html_url, user: { login } },
    action
  }
}) => {
  const say = `${bold('@' + login)} ${lightgreen(action)} an ${singular(event)}: ${html_url}`
  config.channels.forEach(chan => {
    Client.say(chan, say)
  })
}

module.exports = {
  opened
}
