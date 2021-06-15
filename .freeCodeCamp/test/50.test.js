const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stdout.txt');
    const correctCommand = lastCommand[0].op === '>' && /stdout\.txt$/.test(lastCommand[1]);

    assert(correctCommand && /^\s*$/g.test(fileContents));
  });
});
