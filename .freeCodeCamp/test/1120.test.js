const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script file', () => {
  it('should have the suggested command', async () => {
    const scriptFile = await getFileContents('../translate.sh');

    assert(/cat[ \t]+\$1[ \t]*\|[ \t]*sed[ \t]+('|")[ \t]*s\/catnip\/dogchow\/[ \t]*;[ \t]*s\/cat\/dog\/[ \t]*;?[ \t]*\1[ \t]*;?\s*$/g.test(scriptFile));
  });
});
