import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  const str = 'Hello';
  it('Test reverse Hello', () => {
    expect(pipe.transform(str)).toBe(`olleH`);
  });
  it('Test reverse 123', () => {
    expect(pipe.transform('123')).toBe(`321`);
  });
});
