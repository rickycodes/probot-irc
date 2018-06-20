const irc = require('irc')
const { channels, server, botName } = require('./config')
const issues = require('./issues')
const pulls = require('./pulls')
const client = new irc.Client(server, botName, { channels })

const registered = bot => {
  bot.on(
    ['issues.opened', 'issues.closed', 'issues.reopened'],
    issues.bind(null, client)
  )
  bot.on(
    ['pull_request.opened', 'pull_request.closed', 'pull_request.reopened'],
    pulls.bind(null, client)
  )
}

module.exports = bot => {
  client.addListener('registered', registered.bind(null, bot))
}
