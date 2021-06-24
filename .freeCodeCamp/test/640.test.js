const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../name.txt');

    assert(lastCommand[0] === 'sed' && lastCommand[1] === 's/r/2/' && lastCommand[2] === 'name.txt' && /freeCodeCamp/.test(fileContents));
  });
});
