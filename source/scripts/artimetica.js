const { somar } = require('./sum.js');

const valor1 = 15;
const valor2 = 25;
const resultadoDaSoma = somar(valor1, valor2);
console.log(`Usando aritmetica.js: A soma de ${valor1} e ${valor2} é: ${resultadoDaSoma}`);

function subtrair(a, b) {
    return a - b;
}