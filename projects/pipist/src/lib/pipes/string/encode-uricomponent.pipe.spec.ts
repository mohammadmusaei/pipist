import { EncodeURIComponentPipe } from './encode-uricomponent.pipe';

describe('EncodeURIComponentPipe', () => {
  let pipe: EncodeURIComponentPipe;

  beforeEach(() => {
    pipe = new EncodeURIComponentPipe();
  });

  it('Test encode URI', () => {
    const str = 'https://www.google.com/search?ei=34 5';
    expect(pipe.transform(str)).toBe('https%3A%2F%2Fwww.google.com%2Fsearch%3Fei%3D34%205');
  });
  it('Test encode URI check null', () => {
    expect(pipe.transform(null)).toBe('null');
  });

});
