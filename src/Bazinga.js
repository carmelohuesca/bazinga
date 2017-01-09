var Bazinga = function(number) {
    this.setNumber = function(number) {
        var number = parseInt(number);
        var isValid = (number !== NaN && number > 0);
        this.number = isValid ? number : 1;
        this.result = isValid ? number.toString() : 'entrada incorrecta';
    };
    
    this.run = function() {
        return this.result;
    };

    this.setNumber(number);
};
