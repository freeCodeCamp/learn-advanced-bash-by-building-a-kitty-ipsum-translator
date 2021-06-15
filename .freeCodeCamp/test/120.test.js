const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lastCommandAsTyped = await getLastCommand(0, false);

    if(lastCommand[2] === '1') {
      lastCommand.splice(2, 1);
    }

    assert(lastCommand[0] === 'echo' && lastCommand[1] === '' && lastCommand[2].op === '>' && lastCommand[3] === 'stdout.txt' && /echo[ \t]+\$NAME/g.test(lastCommandAsTyped));
  });
});
