import { WrapPipe } from './wrap.pipe';

describe('WrapPipe', () => {
  let pipe: WrapPipe;

  beforeEach(() => {
    pipe = new WrapPipe();
  });

  const str = 'Hello';
  it('Test one wrapper', () => {
    expect(pipe.transform(str,'#')).toBe(`#${str}#`);
  });
  it('Test two wrapper', () => {
    expect(pipe.transform(str,'{{','}}')).toBe(`{{${str}}}`);
  });
});
