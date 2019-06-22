import { EncodeURIPipe } from './encode-uri.pipe';

describe('EncodeURIPipe', () => {
  let pipe: EncodeURIPipe;

  beforeEach(() => {
    pipe = new EncodeURIPipe();
  });

  it('Test encode URI', () => {
    const str = 'https://www.google.com/search?ei=34 5';
    expect(pipe.transform(str)).toBe('https://www.google.com/search?ei=34%205');
  });
  it('Test encode URI check null', () => {
    expect(pipe.transform(null)).toBe('null');
  });

});
