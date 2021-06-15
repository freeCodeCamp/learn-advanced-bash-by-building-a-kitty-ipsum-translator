const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'grep' && lastCommand[1] === 'meow' && lastCommand[2] === 'kitty_ipsum_1.txt');
  });
});
