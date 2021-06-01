const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stdout.txt');
    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'bash' && lastCommand[3].op === '>>' && /stdout\.txt$/.test(lastCommand[4]);

    assert(correctCommand && fileContents.match(/hello bash/g).length > 1);
  });
});
