const irc = require('irc')
const { singular } = require('pluralize')
const { bold } = require('irc-colors')

// this should be in an rc file or something
const config = {
  channels: ['#ricky'],
  server: 'irc.freenode.net',
  botName: 'rickybot'
}

const bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
})

module.exports = robot => {
  // There should be some guards here to ensure bot is connected
  // and in proper channel etc.

  // should maybe just not use a * here
  robot.on(`*`, async context => {

    let {
      event,
      payload: {
        issue: { html_url, user: { login } },
        action,
        repositories,
        repository
      }
    } = context

    // should this always be singular? ¯\_(ツ)_/¯
    event = singular(event)

    let say
    let repo

    // TODO: need to look at other action type shapes
    if (action === 'opened') {
      say = `@${bold(login)} ${action} an ${event}: ${html_url}`
    } else {
      // other "generic" say
      say = `A human ${action} an ${event}`

      // meh
      if (repositories && repositories.length > 1) {
        repo = repositories.map((repo => repo.name)).join(', ')
        say = `${say} in some repos: ${repo}`
      } else if (repositories && repositories.length) {
        repo = repositories.pop().name
        say = `${say} in repo: ${repo}`
      } else {
        repo = repository.name
        say = `${say} in repo: ${repo}`
      }
    }

    bot.say(config.channels[0], say)
  })
}
