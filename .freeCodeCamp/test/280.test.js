const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stderr.txt');
    const correctCommand = lastCommand[0] === 'echo' && /^\w+$/.test(lastCommand[1]) && lastCommand[2].op === '|' && lastCommand[3] === './script.sh' && lastCommand[4] === '2' && lastCommand[5].op === '>' && lastCommand[6] === 'stderr.txt';

    assert(correctCommand && /\.\/script.sh/g.test(fileContents));
  });
});
