const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../name.txt');
    
    if (lastCommand[2] === '1') {
      lastCommand.splice(2, 1);
    }

    const correctCommand = lastCommand[0] === 'echo' && lastCommand[1] === 'freeCodeCamp' && (lastCommand[2].op === '>' || lastCommand[2].op === '>>' ) && /name\.txt$/.test(lastCommand[3]);
    assert(correctCommand && /^freeCodeCamp\s*$/g.test(fileContents))
  });
});
