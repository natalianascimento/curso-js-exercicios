console.log(`Trabalhando com listas`);

//ctrol + k + c -> comenta | ctrol + k + u -> descomenta
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiros = `Rio de Janeiros`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
listaDeDestinos.push(`Curitiba`); //Push adiciona um item na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos[1], listaDeDestinos[2]);