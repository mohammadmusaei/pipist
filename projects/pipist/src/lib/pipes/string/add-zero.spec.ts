import { AddZeroPipe } from "./add-zero.pipe";

describe('Pipe: addZero', () => {
    let pipe: AddZeroPipe;

    beforeEach(() => {
        pipe = new AddZeroPipe();
    });

    it('Test with zero', () => {
        expect(pipe.transform(0)).toBe('00');
    });
    it('Test with digit length 1', () => {
        expect(pipe.transform(1)).toBe('01');
    });
    it('Test with digit length 2', () => {
        expect(pipe.transform(22)).toBe('22');
    });
    it('Test with none-digi', () => {
        expect(pipe.transform('s')).toBe('s');
    });

});
