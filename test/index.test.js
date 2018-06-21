const { strip } = require('../src/util')

test('strip', () => expect(strip('pull_request')).toBe('pull request'))
