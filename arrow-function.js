function apresentar(nome) {
  return `Meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


//Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente números de 1 a 9"
  } else {
    return num1 + num2;
  }
}

// Hoisting: arrow function se comporta como expressão

// operador maior ou igual que
// >=

console.log(somaNumerosPequenos(5, 6));
console.log(`Apresentando da função apresentar(nome): ${apresentar('Fernanda')}`)
console.log(`Apresentando da função apresentarArrow(nome): ${apresentarArrow('Fernanda')}`)
