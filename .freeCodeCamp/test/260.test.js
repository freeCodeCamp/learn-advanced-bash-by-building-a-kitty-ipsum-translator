const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../script.sh');

    assert(/bad_command[ \t]*;?\s*$/g.test(scriptFile));
  });
});
