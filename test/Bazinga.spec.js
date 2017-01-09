describe('Bazinga:', function() {

    it('Hay que desarrollar un juego llamado Bazinga', function() {
        expect(new Bazinga()).toBeDefined();
    });

    it('El constructor tiene de entrada un número entero mayor que 0', function() {
        expect(new Bazinga(3)).toBeDefined();
        expect(new Bazinga(0)).toBeDefined();
        expect(new Bazinga(-5)).toBeDefined();
        expect(new Bazinga(6.4)).toBeDefined();
        expect(new Bazinga(-98.4)).toBeDefined();
        expect(new Bazinga('4')).toBeDefined();
        expect(new Bazinga('-98.4')).toBeDefined();
    });

    it('tiene un método run() que devuelve el resultado en formato string', function() {
        expect(typeof new Bazinga().run()).toBe('string');
        expect(new Bazinga(23).run()).toBe('23');
    });

    it('si el número es divisible por 3 debe devolver "Penny"', function() {
        expect(new Bazinga(3).run()).toBe('Penny');
        expect(new Bazinga(6).run()).toBe('Penny');
        expect(new Bazinga(6).run()).toBe('Penny');
    });

    it('si el número es divisible por 5 debe devolver "Sheldon"', function() {
        expect(new Bazinga(5).run()).toBe('Sheldon');
    });

    xit('si el número es divisible por 3 y 5 debe devolver "Leonard"', function() {

    });

    xit('si el número es divisible por 3 y 5 pero no por 2 debe devolver "Howard"  ', function() {

    });

    xit('si el número es divisible por 3, 5 y 7 pero no por 2 debe devolver "Bazinga"', function() {

    });

});
