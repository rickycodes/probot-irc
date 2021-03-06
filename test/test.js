const test = require('tape')
const { colorize, stripUnderscores, aOrAnEvent } = require('../src/util')

test('colorize', t => {
  t.plan(4)
  t.equal(colorize('opened'), '\x0309\x02\x02opened\x03')
  t.equal(colorize('reopened'), '\x0309\x02\x02reopened\x03')
  t.equal(colorize('closed'), '\x0304\x02\x02closed\x03')
  t.equal(colorize('neutral'), '\x0308\x02\x02neutral\x03')
})

test('stripUnderscores', t => {
  t.plan(2)
  t.equal(stripUnderscores('pull_request'), 'pull request')
  t.equal(stripUnderscores('this_should_also_work'), 'this should also work')
})

test('aOrAnEvent', t => {
  t.plan(3)
  t.equal(aOrAnEvent('pull request'), 'a pull request')
  t.equal(`this is ${aOrAnEvent('thing')}`, 'this is a thing')
  t.equal(`this is ${aOrAnEvent('item')}`, 'this is an item')
})
