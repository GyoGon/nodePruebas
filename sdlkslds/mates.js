const mates = {};

function suma(x1, x2) {
    return x1 + x2;
}

function resta(x1, x2) {
    return x1 - x2;
}
function multiplicar(x1, x2) {
    return x1 * x2;
}
function dividir(x1, x2) {
    if (x2 == 0) {
        console.log('no se puede dividir por 0 gente');
    }
    else{
        return x1 / x2;
    }

}
function holabb(nombre){
    console.log('Hola ', nombre);
}
mates.suma = suma;
mates.resta = resta;
mates.multiplicar = multiplicar;
mates.dividir = dividir;

module.exports = mates;

/*
exports.suma = suma;
exports.resta = resta;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/