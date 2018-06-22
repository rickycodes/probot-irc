const { singular } = require('pluralize')
const { aOrAn, colorize, bold, stripSlashes, getSayTemplate } = require('./util')

const say = async (client, {
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
    aOrAn(event),
    stripSlashes(singular(event)),
    title,
    html_url
  )

  Object.keys(client.chans).map(chan => client.say(chan, toSay))
}

module.exports = say
