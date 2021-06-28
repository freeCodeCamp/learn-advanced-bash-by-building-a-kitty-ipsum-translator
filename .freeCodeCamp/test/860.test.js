const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[2] === '1') {
      lastCommand.splice(2, 1);
    }

    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === '-e' && lastCommand[2] === '\\n\\n~~ kitty_ipsum_2.txt info ~~' && lastCommand[3].op === '>>' && lastCommand[4] === 'kitty_info.txt';

    assert(correctCommand && /~~ kitty_ipsum_2\.txt info ~~/g.test(fileContents));
  });
});
