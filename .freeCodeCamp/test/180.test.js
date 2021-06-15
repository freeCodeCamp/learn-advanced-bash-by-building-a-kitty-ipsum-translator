const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'cat' && (lastCommand[1] === undefined || lastCommand[1].op === ';'));
  });
});
