const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlags = (lastCommand.indexOf('-c') > 0 || lastCommand.indexOf('--count') > 0);
    const filteredCommand = lastCommand.filter(part => part !== '-c' && part !== '--count');

    assert(correctFlags && filteredCommand[0] === 'grep' && (filteredCommand[1] === 'meow[a-z]*' || filteredCommand[1].pattern === 'meow[a-z]*') && filteredCommand[2] === 'kitty_ipsum_1.txt');
  });
});
