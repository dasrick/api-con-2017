// const Calculator =
// require '../sr';

const Calculator = require('../src/calculator');

describe('calculator', () => {

    it('should be alway true', () => {
        expect(true).toBe(true);
    });

    describe('Addition', () => {

        beforeEach(() => {
            this.calc = new Calculator();
            this.a = Math.floor(Math.random() * 10);
            this.b = Math.floor(Math.random() * 10);
            // prefix f (describe/it) (ex: fit) will focus - run only this describe/test
            // prefix x (describe/it) (ex: xit) will exclude - run all other than this describe/test
        });

        it('should calc 1 and be 2', () => {
            // arrange

            // act
            const result = this.calc.add(1, 1);

            // aassert
            expect(result).toEqual(2);
        });

        it('should calc and return a number', () => {
            // arrange

            // act
            const result = this.calc.add(this.a, this.b);

            // aassert
            expect(result).toMatch(/\d{1,}/);
        });

    })
});
