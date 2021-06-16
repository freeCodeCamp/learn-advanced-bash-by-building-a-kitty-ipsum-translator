const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const nextCommand = await getNextCommand();

    assert(nextCommand[0] === 'cat' && (nextCommand[1] === undefined || nextCommand[1].op === ';'));
  });
});
