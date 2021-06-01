const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');
    const correctFlags = (lastCommand.indexOf('-o') > 0 || lastCommand.indexOf('--only-matching') > 0);

    if (lastCommand[6] === '1') {
      lastCommand.splice(6, 1);
    }

    const filteredCommand = lastCommand.filter(part => part !== '-o' && part !== '--only-matching');

    assert(correctFlags && filteredCommand[0] === 'grep' && (filteredCommand[1] === 'cat[a-z]*' || filteredCommand[1].pattern === 'cat[a-z]*') && filteredCommand[2] === 'kitty_ipsum_1.txt' && filteredCommand[3].op === '|' && filteredCommand[4] === 'wc' && (filteredCommand[5] === '-l' || filteredCommand[5] === '--lines') && filteredCommand[6].op === '>>' && filteredCommand[7] === 'kitty_info.txt' && /7/.test(fileContents));
  });
});
