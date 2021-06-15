const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctCommand = lastCommand[0] === './script.sh' && lastCommand[1].op === '<' && lastCommand[2] === 'name.txt' && lastCommand[3] === '2' && lastCommand[4].op === '>' && lastCommand[5] === 'stderr.txt';

    assert(correctCommand);
  });
});
