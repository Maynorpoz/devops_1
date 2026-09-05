const { calcularTotal, aplicarDescuento } = require('../src/app');

test('calcula correctamente el total', () => {
    expect(calcularTotal(100, 2)).toBe(200);
});

test('aplica correctamente un descuento', () => {
    expect(aplicarDescuento(1000, 10)).toBe(900);
});
