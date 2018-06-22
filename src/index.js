const irc = require('irc')
const { channels, server, botName } = require('./config')
const say = require('./say')
const client = new irc.Client(server, botName, { channels })

module.exports = bot => {
  bot.on(
    [
      'issues.opened', 'issues.closed', 'issues.reopened',
      'pull_request.opened', 'pull_request.closed', 'pull_request.reopened'
    ],
    say.bind(null, client)
  )
}
