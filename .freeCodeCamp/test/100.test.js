const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const nextCommand = await getNextCommand();

    assert(nextCommand[0] === 'read' && nextCommand[1] === 'NAME');
  });
});
