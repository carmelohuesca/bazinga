var Bazinga = function(number) {
    this.setNumber(number);
};

Bazinga.prototype.setNumber = function(number) {
    var number = parseInt(number);
    var isValid = (number !== NaN && number > 0);
    this.number = isValid ? number : 1;
    this.result = isValid ? number.toString() : 'entrada incorrecta';
};

Bazinga.prototype.isMultipleOf = function(multiple) {
    return (this.number % multiple === 0);
};

Bazinga.prototype.setResult = function(logic, text) {
    this.result = (logic) ? text : this.result;
};

Bazinga.prototype.isPenny = function() {
    var logic = this.isMultipleOf(3);
    this.setResult(logic, 'Penny');
    return logic;
};

Bazinga.prototype.isSheldon = function() {
    var logic = this.isMultipleOf(5);
    this.setResult(logic, 'Sheldon');
    return logic;
};

Bazinga.prototype.isLeonard = function() {
    var logic = (this.isPenny() && this.isSheldon());
    this.setResult(logic, 'Leonard');
    return logic;
};

Bazinga.prototype.isHoward = function() {
    var logic = (this.isLeonard() && !this.isMultipleOf(2));
    this.setResult(logic, 'Howard');
    return logic;
};

Bazinga.prototype.isBazinga = function() {
    var logic = (this.isHoward() && this.isMultipleOf(7));
    this.setResult(logic, 'Bazinga');
    return logic;
};

Bazinga.prototype.run = function() {
    this.isPenny();
    this.isSheldon();
    this.isLeonard();
    this.isHoward();
    this.isBazinga();
    return this.result;
};
