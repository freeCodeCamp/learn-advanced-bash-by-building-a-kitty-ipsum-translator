const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stderr.txt');
    const correctCommand = lastCommand[0] === 'bad_command' && lastCommand[1] === '2' && lastCommand[2].op === '>' && /stderr\.txt$/.test(lastCommand[3]);

    assert(correctCommand && /bash: bad_command: command not found/.test(fileContents));
  });
});
