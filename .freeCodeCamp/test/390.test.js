const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'cat' && lastCommand[1] === 'kitty_ipsum_1.txt' && lastCommand[2].op === '|' && lastCommand[3] === 'wc');
  });
});
