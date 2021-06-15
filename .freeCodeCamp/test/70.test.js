const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const correctCommand = lastCommand[0] === 'bad_command' && lastCommand[1].op === '>' && /stderr\.txt$/.test(lastCommand[2]);

    assert(correctCommand);
  });
});
