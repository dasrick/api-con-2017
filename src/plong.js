class Plong {

    fizzbuzz(x) {
        switch (true) {
            case (this.isDividable(x, 3) && this.isDividable(x, 5)):
                return 'FIZZBUZZ';
            case (this.isDividable(x, 3)):
                return 'FIZZ';
            case (this.isDividable(x, 5)):
                return 'BUZZ';
            default:
                return x;
        }
    }

    isDividable(divident, divisor) {
        return ( divident % divisor ) === 0;
    }

}

module.exports = Plong;