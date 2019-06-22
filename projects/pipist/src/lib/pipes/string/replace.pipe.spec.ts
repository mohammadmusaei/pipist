import { ReplacePipe } from './replace.pipe';

describe('Pipe: addZero', () => {
    let pipe: ReplacePipe;

    beforeEach(() => {
        pipe = new ReplacePipe();
    });

    it('Test character replacement', () => {
        expect(pipe.transform('Hello world!','h','9')).toBe('9ello world!');
    });
    it('Test character replacement with match case', () => {
        expect(pipe.transform('Hello world!','H','9',true)).toBe('9ello world!');
    });

});
