const frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final';

const fraseAtualizada = frase.replace(/palavra-feia/g, '********');

console.log(fraseAtualizada) ;

// const cpf = '12345679810'

// const cpfFormatado = cpf.replace(/(\d{4})?(\d{3})?(\d{3})?(\d{1})/, "$1.$2.$3-$4")

// console.log(cpfFormatado) // O retorno seria 256.846.770-37

const cpf = '12345679810'

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
  console.log(arguments) 
  // é uma forma de visualizar todos os parâmetros que essa função está recebendo, o numero de grupos pode variar e assim fica fácil de debugar.
  return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
})

console.log(cpfFormatado) // O retorno seria 256.846.770-37