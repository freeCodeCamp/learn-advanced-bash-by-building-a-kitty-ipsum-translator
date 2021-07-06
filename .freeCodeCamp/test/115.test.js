const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lastCommandAsTyped = await getLastCommand(0, false);

    assert(lastCommand[0] === 'echo' && lastCommand[1] === '' && /echo[ \t]+\$NAME/g.test(lastCommandAsTyped));
  });
});
