const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && /^\w+$/.test(lastCommand[1]) && lastCommand[2].op === '|' && lastCommand[3] === './script.sh' && (lastCommand[4] === undefined || lastCommand[4].op === ';'));
  });
});
