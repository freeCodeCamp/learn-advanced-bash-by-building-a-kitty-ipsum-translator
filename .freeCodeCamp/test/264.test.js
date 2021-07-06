const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const nextCommand = await getNextCommand();

    assert(nextCommand[0] === './script.sh' && (nextCommand[1] === undefined || nextCommand[1].op === ';'));
  });
});
