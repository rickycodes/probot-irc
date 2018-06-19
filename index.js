const irc = require('irc')
const config = require('./config')
const { opened } = require('./issue-opened')

const Client = new irc.Client(config.server, config.botName, {
  channels: config.channels
})

module.exports = robot => {
  robot.on('issues.opened', opened.bind(null, Client))
  // add other events...
}
