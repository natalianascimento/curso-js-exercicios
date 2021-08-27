//Maneira antiga:
// const palavra = 'interpolada';

// console.log('Minha string ' + palavra);

// console.log(`Minha Template Literal ${palavra}`); 

minhaFunction = (arrayDeStrings, palavra) =>{
    console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
}

const palavra = 'alura';

minhaFunction `Eu estudo na ${palavra} todos os dias`;

const names = ['Lestat', 'Marius', 'Akasha'];
console.log(...names);
console.log(names);

const males = ['Lestat', 'Louis', 'Marius'];
const females = ['Pandora', 'Akasha'];
const characters = [...males, ...females];
console.log(characters);


function negrito(arrayStrings, ...valores) {
    return arrayStrings.reduce((acumulador, string, i) => {
        return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : '' }` ;
    }, '');
}

const nome = 'Paulo Scalercio';
const redeSocial = '@pauloscarlecio';

console.log(negrito`${nome} trabalha na Celum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);