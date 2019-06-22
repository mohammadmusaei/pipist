import { DecodeURIComponentPipe } from './decode-uricomponent.pipe';

describe('DecodeURIComponentPipe', () => {
  let pipe: DecodeURIComponentPipe;

  beforeEach(() => {
    pipe = new DecodeURIComponentPipe();
  });

  it('Test encode URI', () => {
    const str = 'https%3A%2F%2Fwww.google.com%2Fsearch%3Fei%3D34%205';
    expect(pipe.transform(str)).toBe('https://www.google.com/search?ei=34 5');
  });
  it('Test encode URI check null', () => {
    expect(pipe.transform(null)).toBe('null');
  });
});
