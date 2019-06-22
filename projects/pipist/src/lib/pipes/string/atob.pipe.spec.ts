import { AtobPipe } from './atob.pipe';

describe('AtobPipe', () => {
  let pipe: AtobPipe;

  beforeEach(() => {
    pipe = new AtobPipe();
  });

  it('Test atob', () => {
    const str = btoa('Hi Dear!');
    expect(pipe.transform(str)).toBe(atob(str));
  });
});
