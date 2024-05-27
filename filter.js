const pessoas = [
  {
    nome: 'John',
    age: 34,
  },
  {
    nome: 'Ronny',
    age: 26,
  },
  {
    nome: 'Jilcimar',
    age: 30,
  },
  {
    nome: 'Wesley',
    age: 28,
  },
];

const resultado = pessoas.filter((pessoa) => pessoa.age === 26);
console.log(resultado); // [ { nome: 'Ronny', age: 26 } ]