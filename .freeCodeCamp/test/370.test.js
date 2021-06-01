const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlag = lastCommand.indexOf('-m') >= 0 || lastCommand.indexOf('--chars') >= 0;
    const correctArg = lastCommand.indexOf('kitty_ipsum_1.txt') >= 0;

    assert(lastCommand[0] === 'wc' && correctFlag && correctArg);
  });
});
