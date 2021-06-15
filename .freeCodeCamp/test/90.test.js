const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stdout.txt');
    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'bash' && lastCommand[3] === '1' && lastCommand[4].op === '>' && /stdout\.txt$/.test(lastCommand[5]);

    assert(correctCommand && /hello bash/.test(fileContents));
  });
});
