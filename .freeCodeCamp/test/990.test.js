const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[3] === '1') {
      lastCommand.splice(3, 1);
    }

    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === '-e' && lastCommand[2] === '\\nLines that they appear on:' && lastCommand[3].op === '>>' && lastCommand[4] === 'kitty_info.txt';

    assert(correctCommand && fileContents.match(/Lines that they appear on:/g).length >= 4);
  });
});
