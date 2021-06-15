const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlag = lastCommand.indexOf('--color') > 0 || lastCommand.indexOf('--colour') > 0;
    const filteredCommand = lastCommand.filter(part => part !== '--color' && part !== '--colour');

    assert(correctFlag && filteredCommand[0] === 'grep' && filteredCommand[1] === 'meow' && filteredCommand[2] === 'kitty_ipsum_1.txt');
  });
});
