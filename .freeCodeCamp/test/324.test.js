const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'cat' && (lastCommand[1] === 'kitty_ipsum_1.txt' || lastCommand[1] === './kitty_ipsum_1.txt'));
  });
});
