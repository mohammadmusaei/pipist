import { BtoaPipe } from './btoa.pipe';

describe('BtoaPipe', () => {
  let pipe: BtoaPipe;

  beforeEach(() => {
    pipe = new BtoaPipe();
  });

  it('Test btoa', () => {
    const str = 'Hi Dear!';
    expect(pipe.transform(str)).toBe(btoa(str));
  });

});
