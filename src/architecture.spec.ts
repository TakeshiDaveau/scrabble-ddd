// imports and applies the jest extensions
import 'tsarch/dist/jest';

// imports the files entrypoint
import {filesOfProject} from 'tsarch';

describe('architecture', () => {
  // architecture tests can take a while to finish
  jest.setTimeout(60000);

  it('domain layer should not depend on the application layer', async () => {
    const rule = filesOfProject()
      .inFolder('domain')
      .shouldNot()
      .dependOnFiles()
      .inFolder('application');

    await expect(rule).toPassAsync();
  });

  it('domain layer should not depend on the infrastructure layer', async () => {
    const rule = filesOfProject()
      .inFolder('domain')
      .shouldNot()
      .dependOnFiles()
      .inFolder('infrastructure');

    await expect(rule).toPassAsync();
  });

  it('infrastructure layer should not depend on the application layer', async () => {
    const rule = filesOfProject()
      .inFolder('infrastructure')
      .shouldNot()
      .dependOnFiles()
      .inFolder('application');

    await expect(rule).toPassAsync();
  });

  it('application layer should not depend on the infrastructure layer', async () => {
    const rule = filesOfProject()
      .inFolder('application')
      .shouldNot()
      .dependOnFiles()
      .inFolder('infrastructure');

    await expect(rule).toPassAsync();
  });

  // it('business logic should be cycle free', async () => {
  //   const rule = filesOfProject()
  //     .inFolder('business')
  //     .should()
  //     .beFreeOfCycles();

  //   await expect(rule).toPassAsync();
  // });
});
