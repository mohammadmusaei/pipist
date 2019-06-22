import { DecodeURIPipe } from './decode-uri.pipe';

describe('DecodeURIPipe', () => {
  let pipe: DecodeURIPipe;

  beforeEach(() => {
    pipe = new DecodeURIPipe();
  });

  it('Test encode URI', () => {
    const str = 'https://www.google.com/search?ei=34%205';
    expect(pipe.transform(str)).toBe('https://www.google.com/search?ei=34 5');
  });
  it('Test encode URI check null', () => {
    expect(pipe.transform(null)).toBe('null');
  });
});
