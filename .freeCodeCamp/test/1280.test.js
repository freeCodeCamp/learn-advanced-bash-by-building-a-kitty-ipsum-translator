const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();

    if (lastCommand[2] === '1') {
      lastCommand.splice(2, 1);
    }

    assert(lastCommand[0] === './translate.sh' && (lastCommand[1] === 'kitty_ipsum_2.txt' || lastCommand[1] === './kitty_ipsum_2.txt') && (lastCommand[2].op === '>' || lastCommand[2].op === '>>') && lastCommand[3] === 'doggy_ipsum_2.txt');
  });
});
