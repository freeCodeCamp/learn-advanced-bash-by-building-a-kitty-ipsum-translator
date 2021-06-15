const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[4] === '1') {
      lastCommand.splice(4, 1);
    }

    const correctCommand = lastCommand[0] === 'wc' && (lastCommand[1] === '-m' || lastCommand[1] === '--chars') && lastCommand[2].op === '<' && lastCommand[3] === 'kitty_ipsum_1.txt' && lastCommand[4].op === '>>' && lastCommand[5] === 'kitty_info.txt';

    assert(correctCommand && /1738/.test(fileContents));
  });
});
