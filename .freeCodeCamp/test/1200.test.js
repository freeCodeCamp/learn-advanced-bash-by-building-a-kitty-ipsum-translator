const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlag1 = lastCommand.indexOf('--color') > 3 || lastCommand.indexOf('--colour') > 3;
    const correctFlag2 = lastCommand.indexOf('-E') > 3 || lastCommand.indexOf('--extended-regexp') > 3;
    const filteredCommand = lastCommand.filter(part => part !== '--color' && part !== '--colour' && part !== '-E' && part !== '--extended-regexp');

    assert(correctFlag1 && correctFlag2 && filteredCommand[0] === './translate.sh' && (filteredCommand[1] === 'kitty_ipsum_1.txt' || filteredCommand[1] === './kitty_ipsum_1.txt') && filteredCommand[2].op === '|' && filteredCommand[3] === 'grep' && (filteredCommand[4] === 'dog[a-z]*|woof[a-z]*' || filteredCommand[4] === 'woof[a-z]*|dog[a-z]*' || filteredCommand[4].pattern === 'dog[a-z]*|woof[a-z]*' || filteredCommand[4].pattern === 'woof[a-z]*|dog[a-z]*'));
  });
});
