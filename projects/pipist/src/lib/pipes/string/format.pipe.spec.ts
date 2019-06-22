import { FormatPipe } from './format.pipe';

describe('FormatPipe', () => {
  let pipe: FormatPipe;

  beforeEach(() => {
    pipe = new FormatPipe();
  });

  it('Test string format with #0...#1 pattern', () => {
    const str = 'Hello #0 #1';
    expect(pipe.transform(str, 'World', 'Im Here!')).toBe('Hello World Im Here!');
  });
});
