import { RtrimPipe } from './rtrim.pipe';

describe('RtrimPipe', () => {
  let pipe: RtrimPipe;

  beforeEach(() => {
    pipe = new RtrimPipe();
  });

  it('Test remove right spaces', () => {
    const str = ' Hello  !  ';
    expect(pipe.transform(str)).toBe(' Hello  !');
    expect(pipe.transform(str).length).toBe(str.length - 2);
  });
});
