import { PoliticoModule } from './politico.module';

describe('PoliticoModule', () => {
  let politicoModule: PoliticoModule;

  beforeEach(() => {
    politicoModule = new PoliticoModule();
  });

  it('should create an instance', () => {
    expect(politicoModule).toBeTruthy();
  });
});
