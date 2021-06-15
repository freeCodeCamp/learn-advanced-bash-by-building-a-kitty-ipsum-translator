const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'grep' && lastCommand[1] === 'meow' && lastCommand[2] === 'kitty_ipsum_1.txt');
  });
});
