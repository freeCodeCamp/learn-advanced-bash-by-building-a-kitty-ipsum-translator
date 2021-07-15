const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlag = lastCommand.indexOf('--color') > 0;
    const filteredCommand = lastCommand.filter(part => part !== '--color');

    assert(correctFlag && filteredCommand[0] === 'diff' && (filteredCommand[1] === 'kitty_ipsum_1.txt' || filteredCommand[1] === './kitty_ipsum_1.txt') && (filteredCommand[2] === 'doggy_ipsum_1.txt' || filteredCommand[2] === './doggy_ipsum_1.txt'));
  });
});
