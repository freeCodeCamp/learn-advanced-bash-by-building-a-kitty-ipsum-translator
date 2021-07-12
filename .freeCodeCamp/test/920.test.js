/*const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[4] === '1') {
      lastCommand.splice(4, 1);
    }

    if(lastCommand[6] === '1') {
      lastCommand.splice(6, 1);
    }

    const correctCommand1 = lastCommand[0] === 'wc' && (lastCommand[1] === '-m' || lastCommand[1] === '--chars') && lastCommand[2].op === '<' && lastCommand[3] === 'kitty_ipsum_2.txt' && lastCommand[4].op === '>>' && lastCommand[5] === 'kitty_info.txt';
    const correctCommand2 = lastCommand[0] === 'cat' && lastCommand[2] === 'kitty_ipsum_2.txt' && lastCommand[3].op === '|' && lastCommand[4] === 'wc' && (lastCommand[5] === '-m' || lastCommand[5] === '--chars') && lastCommand[6] === '>>' && lastCommand[7] === 'kitty_info.txt';

    assert((correctCommand1 || correctCommand2) && /1678/.test(fileContents));
  });
});*/
