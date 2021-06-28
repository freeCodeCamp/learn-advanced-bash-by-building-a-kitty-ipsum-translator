const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');
    const correctCommands = (lastCommand.includes('grep') && lastCommand.includes('wc') && lastCommand.some(item => item.op === '>>') && (lastCommand.includes('kitty_info.txt') || lastCommand.includes('./kitty_info.txt')));
    const correctFlags = (lastCommand.indexOf('-o') > 0 || lastCommand.indexOf('--only-matching') > 0);

    assert(correctCommands && correctFlags && /\s+8\s*$/.test(fileContents));
  });
});
