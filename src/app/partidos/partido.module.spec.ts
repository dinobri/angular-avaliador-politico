import { PartidoModule } from './partido.module';

describe('PartidoModule', () => {
  let partidoModule: PartidoModule;

  beforeEach(() => {
    partidoModule = new PartidoModule();
  });

  it('should create an instance', () => {
    expect(partidoModule).toBeTruthy();
  });
});
