const assert = require('assert')
const { getenv } = require('../build/index')

function runTests () {
  assert.strictEqual(getenv('TEST'), 'value')
  assert.strictEqual(getenv('TEST', 'default'), 'value')
  assert.strictEqual(getenv('NOT_PRESENT', 'default'), 'default')
  assert.throws(() => { getenv('NOT_PRESENT') })

  console.info('All tests passed succesfully! :D')
}

process.env = {
  TEST: 'value'
}

runTests()
