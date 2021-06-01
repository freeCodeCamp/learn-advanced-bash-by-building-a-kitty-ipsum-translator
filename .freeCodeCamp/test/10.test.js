const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'bash');
  });
});
