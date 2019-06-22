import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('Test Capitalize "hello world!"', () => {
    const str = 'hello world!';
    expect(pipe.transform(str)).toBe('Hello World!');
  });

});
