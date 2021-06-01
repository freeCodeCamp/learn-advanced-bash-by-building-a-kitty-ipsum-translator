const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlags = (lastCommand.indexOf('-n') > 0 && lastCommand.indexOf('-n') <= 3) || (lastCommand.indexOf('--line-number') > 0 && lastCommand.indexOf('--line-number') <= 3);
    const filteredCommand = lastCommand.filter(part => part !== '-n' && part !== '--line-number');

    assert(correctFlags && filteredCommand[0] === 'grep' && (filteredCommand[1] === 'meow[a-z]*' || filteredCommand[1].pattern === 'meow[a-z]*') && filteredCommand[2] === 'kitty_ipsum_1.txt' && filteredCommand[3].op === '|' && filteredCommand[4] === 'sed' && filteredCommand[5] === 's/[0-9]+/1/');
  });
});
