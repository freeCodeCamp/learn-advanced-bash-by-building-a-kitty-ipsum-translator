const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script file', () => {
  it('should have the suggested command', async () => {
    const scriptFile = await getFileContents('../translate.sh');
    const test1 = /cat[ \t]+\$1[ \t]*\|[ \t]*sed[ \t]+(-E[ \t]+|-r[ \t+]|--regexp-extended[ \t+])?('|")[ \t]*s\/catnip\/dogchow\/g[ \t]*;[ \t]*s\/cat\/dog\/g[ \t]*;[ \t]*s\/(meow\|meowzer|meowzer\|meow)\/woof\/g[ \t]*;?[ \t]*\2([ \t]+-E|[ \t]+-r|[ \t]+--regexp-extended)?[ \t]*;?\s*$/g.test(scriptFile);
    const test2 = /(sed[ \t]+(-E|-r|--regexp-extended)|(-E|-r|--regexp-extended)[ \t]*;?\s*$)/g.test(scriptFile);

    assert(test1 && test2);
  });
});
