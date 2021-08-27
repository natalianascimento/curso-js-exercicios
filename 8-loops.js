console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:")
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //Condicional foi simplificado aqui;

let contador = 0;
let destinoExiste = false;

while (contador < 3 ){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador += 1;
}

// for (let cont = 0 ; contador < 3 ; cont++){
//     ...
// }

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else {
    console.log("Erro");
} 

