// log -> registro

const minhaVar = true;
const usuario = {'Linha': 
{'Nome':'Usuário', 'Sobrenome':'Padrão', 'Idade':'27', 'Sexo':'M'}
};
// console.log(245)
// console.log("eu sou um texto")
// console.log(minhaVar)

// tratamento de erro!


if (minhaVar === true) {
    console.error('deu erro!')
} else {
    console.log(minhaVar)
}

console.table(usuario)
console.time();
console.timeEnd();
console.trace();
