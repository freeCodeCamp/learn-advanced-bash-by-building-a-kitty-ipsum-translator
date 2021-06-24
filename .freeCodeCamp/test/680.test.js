const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'freeCodeCamp' && lastCommand[2].op === '|' && lastCommand[3] === 'sed' && lastCommand[4] === 's/freecodecamp/f233C0d3C@mp/i');
  });
});
