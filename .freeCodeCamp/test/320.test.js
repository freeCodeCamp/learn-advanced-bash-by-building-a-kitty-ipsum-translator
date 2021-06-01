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

    const correctCommand = lastCommand[0] === './script.sh' && lastCommand[1].op === '<' && lastCommand[2] === 'name.txt';
    const correctRedirect = (lastCommand[3] === '2' && lastCommand[4].op === '>' && lastCommand[5] === 'stderr.txt' && lastCommand[6].op === '>' && lastCommand[7] === 'stdout.txt') || (lastCommand[3].op === '>' && lastCommand[4] === 'stdout.txt' && lastCommand[5] === '2' && lastCommand[6].op === '>' && lastCommand[7] === 'stderr.txt')


    assert(correctCommand && correctRedirect && /freeCodeCamp/g.test(fileContents));
  });
});
