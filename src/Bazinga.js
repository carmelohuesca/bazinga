var Bazinga = function(number) {

    this.setNumber = function(number) {
        var number = parseInt(number);
        var isValid = (number !== NaN && number > 0);
        this.number = isValid ? number : 1;
        this.result = isValid ? number.toString() : 'entrada incorrecta';
    };

    this.isMultipleOf = function(multiple) {
        return (this.number % multiple === 0);
    };

    this.setResult = function(logic, text) {
        this.result = (logic) ? text : this.result;
    };

    this.isPenny = function() {
        var logic = this.isMultipleOf(3);
        this.setResult(logic, 'Penny');
        return logic;
    };

    this.isSheldon = function() {
        var logic = this.isMultipleOf(5);
        this.setResult(logic, 'Sheldon');
        return logic;
    };

    this.isLeonard = function() {
        var logic = (this.isPenny() && this.isSheldon());
        this.setResult(logic, 'Leonard');
        return logic;
    };

    this.run = function() {
        this.isPenny();
        this.isSheldon();
        this.isLeonard();
        return this.result;
    };

    this.setNumber(number);
};
