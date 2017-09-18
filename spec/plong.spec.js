const Plong = require('../src/plong');

describe('Plong', () => {

    describe('all fizz buzz foo', () => {

        beforeEach(() => {
            this.plong = new Plong();
        });


        it('should given 1 return 1', () => {
            // arrange
            const given = 1;
            const expectResult = 1;
            // act
            const result = this.plong.fizzbuzz(given);
            // aassert
            expect(result).toEqual(expectResult);
        });

        it('should given 2 return 2', () => {
            // arrange
            const given = 1;
            const expectResult = 1;
            // act
            const result = this.plong.fizzbuzz(given);
            // aassert
            expect(result).toEqual(expectResult);
        });

        it('should given 3 return FIZZ', () => {
            // arrange
            const given = 3;
            const expectResult = 'FIZZ';
            // act
            const result = this.plong.fizzbuzz(given);
            // aassert
            expect(result).toEqual(expectResult);
        });

        it('should given 5 return BUZZ', () => {
            // arrange
            const given = 5;
            const expectResult = 'BUZZ';
            // act
            const result = this.plong.fizzbuzz(given);
            // aassert
            expect(result).toEqual(expectResult);
        });

        it('should given 15 return FIZZBUZZ', () => {
            // arrange
            const given = 15;
            const expectResult = 'FIZZBUZZ';
            // act
            const result = this.plong.fizzbuzz(given);
            // aassert
            expect(result).toEqual(expectResult);
        });

    });

});