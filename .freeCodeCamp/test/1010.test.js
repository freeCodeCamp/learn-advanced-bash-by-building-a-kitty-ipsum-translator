const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('translate.sh') && lastCommand[0] === 'touch' && /translate\.sh/g.test(lastCommand[1]));
  });
});
