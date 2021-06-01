const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');
    const correctCommands = lastCommand.includes('grep') && lastCommand.includes('sed') && lastCommand.some(item => item.op === '>>') && (lastCommand.includes('kitty_info.txt') || lastCommand.includes('./kitty_info.txt'));
    const correctFlags = lastCommand.includes('-n') || lastCommand.includes('--line-number');

    assert(correctCommands && correctFlags && /\s+4\s+8\s+12\s+20\s+24\s+25\s+28\s*$/.test(fileContents));
  });
});
