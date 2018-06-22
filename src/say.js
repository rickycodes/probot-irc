const { singular } = require('pluralize')
const { aOrAnEvent, colorize, bold, stripUnderscores, getSayTemplate } = require('./util')

const say = (client, template) => (
  Object.keys(client.chans).map(chan => client.say(chan, template))
)

const handle = async (client, {
  event,
  payload
}) => {
  const { action } = payload
  const {
    title, html_url, user: { login }
  } = payload.issue || payload.pull_request

  const toSay = getSayTemplate(
    `${bold('@' + login)}`,
    bold(colorize(action)),
    aOrAnEvent(stripUnderscores(singular(event))),
    title,
    html_url
  )

  say(client, toSay)
}

module.exports = handle
