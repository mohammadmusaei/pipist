import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('Test remove all spaces around', () => {
    const str = ' Hello   ';
    expect(pipe.transform(str)).toBe('Hello');
    expect(pipe.transform(str).length).toBe(str.length - 4);
  });
});
