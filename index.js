const irc = require('irc')
const config = require('./config')
const { issues } = require('./issues')

const client = new irc.Client(config.server, config.botName, {
  channels: config.channels
})

module.exports = robot => {
  client.addListener('registered', () => {
    robot.on(['issues.opened', 'issues.closed'], issues.bind(null, client))
    // add other events...
  })
}
