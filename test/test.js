const test = require('tape')
const { stripSlashes, aOrAn } = require('../src/util')

test('utils', function (test) {
  test.plan(2)
  test.equal(stripSlashes('pull_request'), 'pull request')
  test.equal(aOrAn('pull request'), 'a')
})
