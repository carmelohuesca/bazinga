/**
 * Juego TDD Bazinga
 * @constructor
 * @class Bazinga
 * @param {number} number número para la lógica
 */
var Bazinga = function(number) {
    this.setNumber(number);
};
/**
 * Setea el valor del número
 * @method Bazinga.setNumber
 * @param {number} number número para la lógica
 */
Bazinga.prototype.setNumber = function(number) {
    var number = parseInt(number);
    var isValid = (number !== NaN && number > 0);
    this.number = isValid ? number : 1;
    this.result = isValid ? number.toString() : 'entrada incorrecta';
};
/**
 * Método que devuelve si un número es múltiplo
 * @param  {number}  multiple número múltiplo
 * @return {boolean}          Resultado de la operación
 */
Bazinga.prototype.isMultipleOf = function(multiple) {
    return (this.number % multiple === 0);
};
/**
 * Establece el resultado si ha ido bien la operacion lógica
 * @method Bazinga#setResult
 * @param {boolean} logic operación lógica
 * @param {string} text  texto del resultado
 */
Bazinga.prototype.setResult = function(logic, text) {
    this.result = (logic) ? text : this.result;
};
/**
 * Lógica para el resultado de "Penny"
 * @method Bazinga#isPenny  
 * @return {boolean} Resultado de la lógica
 */
Bazinga.prototype.isPenny = function() {
    let logic = this.isMultipleOf(3);
    this.setResult(logic, 'Penny');
    return logic;
};
/**
 * Lógica para el resultado de "Sheldon"
 * @method Bazinga#isSheldon    
 * @return {boolean} Resultado de la lógica
 */
Bazinga.prototype.isSheldon = function() {
    let logic = this.isMultipleOf(5);
    this.setResult(logic, 'Sheldon');
    return logic;
};
/**
 * Lógica para el resultado de "Leonard"
 * @method Bazinga#isLeonard    
 * @return {boolean} Resultado de la lógica
 */
Bazinga.prototype.isLeonard = function() {
    let logic = this.isPenny() && this.isSheldon();
    this.setResult(logic, 'Leonard');
    return logic;
};
/**
 * Lógica para el resultado de "Howard"
 * @method Bazinga#isHoward     
 * @return {boolean} Resultado de la lógica
 */
Bazinga.prototype.isHoward = function() {
    let logic = this.isLeonard() && !this.isMultipleOf(2);
    this.setResult(logic, 'Howard');
    return logic;
};
/**
 * Lógica para el resultado de "Bazinga"
 * @method Bazinga#isBazinga    
 * @return {boolean} Resultado de la lógica
 */
Bazinga.prototype.isBazinga = function() {
    let logic = this.isHoward() && this.isMultipleOf(7);
    this.setResult(logic, 'Bazinga');
    return logic;
};
/**
 * Método que se encarga de ejecutar todas las lógicas
 * @method Bazinga#run  
 * @return {string} Resultado del juego
 */
Bazinga.prototype.run = function() {
    this.isPenny();
    this.isSheldon();
    this.isLeonard();
    this.isHoward();
    this.isBazinga()
    return this.result;
};
