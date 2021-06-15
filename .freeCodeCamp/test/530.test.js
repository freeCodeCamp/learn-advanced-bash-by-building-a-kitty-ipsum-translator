const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlags = (lastCommand.indexOf('--color') > 0 || lastCommand.indexOf('--colour') > 0) && (lastCommand.indexOf('-n') > 0 || lastCommand.indexOf('--line-number') > 0);
    const filteredCommand = lastCommand.filter(part => part !== '--color' && part !== '--colour' && part !== '-n' && part !== '--line-number');

    assert(correctFlags && filteredCommand[0] === 'grep' && (filteredCommand[1] === 'meow[a-z]*' || filteredCommand[1].pattern === 'meow[a-z]*') && filteredCommand[2] === 'kitty_ipsum_1.txt');
  });
});
