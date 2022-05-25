const math = require("mathjs");
math.import(require("mathjs-simple-integral"));

function replaceExponentSymbol(string) {
  while (string.includes("^") === true) {
    let exponente = "^";
    string = string.replace(exponente, "**");
  }

  return string;
}

function replaceCos(string) {
  return string.replace(/cos/g, "Math.cos");
}
function replaceSin(string) {
  return string.replace(/sin/g, "Math.sin");
}
function replaceTan(string) {
  return string.replace(/tan/g, "Math.tan");
}
function replaceLogaritmoNatural(string) {
  return string.replace(/log/g, "Math.log");
}
function replaceEuler(string) {
  return string.replace(/e/g, "(Math.exp(1))");
}
function replacePi(string) {
  return string.replace(/pi/g, "Math.PI");
}
function replaceAbs(string) {
  return string.replace(/abs/g, "Math.abs");
}

function integracionDefinida(funcion, upperLimit, lowerLimit) {
  let integralDefinida = math.integral(funcion, "x").toString();

  let ladoA = integralDefinida.replace(/x/g, upperLimit);
  ladoA = replaceExponentSymbol(ladoA);
  ladoA = replaceSin(ladoA);
  ladoA = replaceCos(ladoA);
  ladoA = replaceTan(ladoA);
  ladoA = replaceLogaritmoNatural(ladoA);
  ladoA = replaceEuler(ladoA);
  ladoA = replacePi(ladoA);
  ladoA = replaceAbs(ladoA);

  let ladoB = integralDefinida.replace(/x/g, lowerLimit);
  ladoB = replaceExponentSymbol(ladoB);
  ladoB = replaceSin(ladoB);
  ladoB = replaceCos(ladoB);
  ladoB = replaceTan(ladoB);
  ladoB = replaceLogaritmoNatural(ladoB);
  ladoB = replaceEuler(ladoB);
  ladoB = replacePi(ladoB);
  ladoB = replaceAbs(ladoB);

  let integralEvaluada = `(${ladoA}) - (${ladoB})`;

  return integralEvaluada;
}

module.exports = {
  integracionDefinida,
};

let string = "Math.cos cos cos";
console.log(replaceCos(string));
