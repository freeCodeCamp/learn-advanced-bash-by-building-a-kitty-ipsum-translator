const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stdout.txt');
    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'bash' && lastCommand[3].op === '>' && /stdout\.txt$/.test(lastCommand[4]);

    assert(correctCommand && /hello bash/.test(fileContents));
  });
});
