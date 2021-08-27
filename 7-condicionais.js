console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
const passagemComprada = true;

console.log("Destinos possíveis:")
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Compra aprovada");
    listaDeDestinos.splice(1,1);

}else{
    console.log("Comprador não é maior de idade, não pode vender");

}

console.log("Embarque: \n\n");

if(idadeComprador >=18 && passagemComprada){
    console.log("Boa viagem");

} else {
    console.log("Não pode embarcar");
}

