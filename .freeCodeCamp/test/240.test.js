const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command', async () => {
    const scriptFile = await getFileContents('../script.sh');

    assert(/read[ \t]+NAME[ \t]*;?\s*$/g.test(scriptFile));
  });
});
