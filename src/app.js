function calcularTotal(precio, cantidad) {
    // TODO: agregar validación de precios negativos
    return precio * cantidad;
}

function aplicarDescuento(total, porcentaje) {
    // TODO: validar que porcentaje esté entre 0 y 100
    return total - (total * porcentaje / 100);
}

module.exports = {
    calcularTotal,
    aplicarDescuento
};
