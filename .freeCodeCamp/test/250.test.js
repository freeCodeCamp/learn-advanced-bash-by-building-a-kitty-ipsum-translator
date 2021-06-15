const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../script.sh');

    assert(/^\s*echo[ \t]+('|"|)Hello[ \t]+\$NAME\1[ \t]*;?\s*$/gm.test(scriptFile));
  });
});
