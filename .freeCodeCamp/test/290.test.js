const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../stdout.txt');
    
    const indexOf1 = lastCommand.indexOf('1');
    if (indexOf1 > 0) {
      lastCommand.splice(indexOf1, 1);
    }

    const correctCommand = lastCommand[0] === 'echo' && /^\w+$/.test(lastCommand[1]) && lastCommand[2].op === '|' && lastCommand[3] === './script.sh';
    const correctRedirect = (lastCommand[4] === '2' && lastCommand[5].op === '>' && lastCommand[6] === 'stderr.txt' && lastCommand[7].op === '>' && lastCommand[8] === 'stdout.txt') || (lastCommand[4].op === '>' && lastCommand[5] === 'stdout.txt' && lastCommand[6] === '2' && lastCommand[7].op === '>' && lastCommand[8] === 'stderr.txt')

    assert(correctCommand && correctRedirect && fileContents.indexOf(lastCommand[1] >= 0));
  });
});
