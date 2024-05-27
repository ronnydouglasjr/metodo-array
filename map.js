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

// Aprendi na task do MarqueAi 
const resultado = pessoas.map(({nome}) => nome).join(', ');
console.log(resultado); // John, Ronny, Jilcimar, Wesley
