const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[2] === '1') {
      lastCommand.splice(2, 1);
    }

    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === '~~ kitty_ipsum_1.txt info ~~' && (lastCommand[2].op === '>' || lastCommand[2].op === '>>') && lastCommand[3] === 'kitty_info.txt';

    assert(correctCommand && /~~ kitty_ipsum_1\.txt info ~~/g.test(fileContents));
  });
});
