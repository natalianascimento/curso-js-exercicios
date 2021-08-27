console.log("Conversão de Tipos");

console.log("ano" + 2020); //CONCATENAR 
console.log("2" + "2"); //CONCATENAR
console.log(parseInt("2") + parseInt("2")); //Transformar texto em inteiro e somar - parse

console.log("10" / "2"); //O interpretador do JS tenta converter para número e realizar a operação. Apenas a soma que ele não faz isso. Conversão implícita.

console.log("Natália" / "2"); //RETORNA NaN - Not a Number
console.log(6.5); //Entende que é um número com ponto flutuante - casa decimal
console.log(6,5); //A vírgula vira um espaço.