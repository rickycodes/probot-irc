const test = require('tape')
const { stripUnderscores, aOrAn } = require('../src/util')

test('stripUnderscores', test => {
  test.plan(1)
  test.equal(stripUnderscores('pull_request'), 'pull request')
})

test('aOrAn', test => {
  test.plan(2)
  test.equal(aOrAn('pull request'), 'a')
  test.equal(`this is ${aOrAn('thing')} thing`, 'this is a thing')
})
