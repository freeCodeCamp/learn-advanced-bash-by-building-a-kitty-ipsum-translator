const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctFlag1 = (lastCommand.indexOf('-n') > 0 && lastCommand.indexOf('-n') <= 3) || (lastCommand.indexOf('--line-number') > 0 && lastCommand.indexOf('--line-number') <= 3);
    const correctFlag2 = lastCommand.indexOf('-E') >= 6 || lastCommand.indexOf('-r') >= 6 || lastCommand.indexOf('--regexp-extended') >= 6;
    let filteredCommand = lastCommand.filter(part => part !== '-n' && part !== '--line-number' && part !== '-E' && part !== '-r' && part !== '--regexp-extended');

    if(filteredCommand[6] === '1') {
      filteredCommand.splice(6, 1);
    }

    assert(correctFlag1 && correctFlag2 && filteredCommand[0] === 'grep' && (filteredCommand[1] === 'meow[a-z]*' || filteredCommand[1].pattern === 'meow[a-z]*') && filteredCommand[2] === 'kitty_ipsum_1.txt' && filteredCommand[3].op === '|' && filteredCommand[4] === 'sed' && filteredCommand[5] === 's/([0-9]+).*/\\1/' && filteredCommand[6].op === '>>' && filteredCommand[7] === 'kitty_info.txt');
  });
});
