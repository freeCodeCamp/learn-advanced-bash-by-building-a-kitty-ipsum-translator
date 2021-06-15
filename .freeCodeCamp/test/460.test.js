const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[5] === '1') {
      lastCommand.splice(5, 1);
    }

    const correctCommand = lastCommand[0] === 'cat' && lastCommand[1] === 'kitty_ipsum_1.txt' && lastCommand[2].op === '|' && lastCommand[3] === 'wc' && (lastCommand[4] === '-w' || lastCommand[4] === '--words') && lastCommand[5].op === '>>' && lastCommand[6] === 'kitty_info.txt';

    assert(correctCommand && /332/.test(fileContents));
  });
});
