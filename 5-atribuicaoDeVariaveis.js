console.log('Trabalhando com atribuição de variáveis');

//Const tem que ser declarado e atribuido em uma uníca linha, visto que seu valor não pode ser alterado.
//const idade = 26; 
const primeiroNome = "Natália"; //Constante - Const - o valor não pode mudar | let = variável
const sobrenome = "Nascimento";

console.log(primeiroNome + sobrenome);
console.log(primeiroNome , sobrenome); //A VIRGULA INSERE UM ESPAÇO
console.log(primeiroNome + " " + sobrenome); //Concatenação com espaço

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //Interpolação de variáveis

const nomeCompleto = primeiroNome + sobrenome; //Aqui o erro que estora é: nome é uma constante, sendo assim, seu valor não pode ser alterado;
console.log(nomeCompleto);

//TENTAR REDUZIR AO MÁXIMO O USO DE LET - USAR COM ABUNDANCIA O CONST-> POIS EVITA MUITOS ERROS E BUGS NO CÓDIGO -> É UMA BOA PRÁTICA

//ALGO QUE É NORMAL SER FEITO COM LET:
let contador = 0;
contador = contador + 1;

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade+1;
console.log(idade);