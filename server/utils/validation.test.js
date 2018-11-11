const expect = require('expect');

let {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString(39470243);
        expect(res).toBe(false);
    });

    it('should reject string with only space', () => {
        let res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        let res = isRealString('    bunq   ');
        expect(res).toBe(true);
    });
});