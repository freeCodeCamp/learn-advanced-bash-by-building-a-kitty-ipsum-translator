const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('script.sh') && lastCommand[0] === 'touch' && /script\.sh/g.test(lastCommand[1]));
  });
});
