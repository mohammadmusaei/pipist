import { LtrimPipe } from './ltrim.pipe';

describe('LtrimPipe', () => {
  let pipe: LtrimPipe;

  beforeEach(() => {
    pipe = new LtrimPipe();
  });

  it('Test remove left spaces', () => {
    const str = ' Hello  !';
    expect(pipe.transform(str)).toBe('Hello  !');
    expect(pipe.transform(str).length).toBe(str.length - 1);
  });

});
