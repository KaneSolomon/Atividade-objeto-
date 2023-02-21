// 01 - Crie um array que receba 5 itens e exiba no console.

const array = [1, 2, 3, 4, 5];
console.log(array);

// 02 - Utilize um método para adicionar um nome ao inicio do array

array.unshift("NomeX");
console.log(array);

// 03 - Utilize um método para remover o último nome do array.

array.pop();
console.log(array);

// 04 - Utilize um método para adicionar dois nomes ao fim do array.

array.push("NomeY", "NomeW");
console.log(array);

// 05 - Utilize um método para remover o primeiro nome do array.


05 - array.shift();
console.log(array);

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.


const pessoa = {
name: "Ana",
age: 27,
profession: "Developer"
};
console.log(pessoa);

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.


pessoa.city = "São Paulo";
console.log(pessoa);

// 09 - Remova uma propriedade desse objeto.

delete pessoa.profession;
console.log(pessoa);

// 10 - Mostre no console todas as propriedades desse objeto.

10 - console.log(Object.keys(pessoa));

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [
{
nome: "NomaA",
idade: 30,
telefone: "999999999",
amigos: ["AmigoA", "AmigoB", "AmigoC", "AmigoD"]
},
{
nome: "NomeB",
idade: 25,
telefone: "88888888",
amigos: ["AmigoA", "AmigoB", "AmigoC", "AmigoD"]
},
{
nome: "NomeC",
idade: 40,
telefone: "77777777",
amigos: ["AmigoA", "AmigoB", "AmigoC", "AmigoD"]
},
{
nome: "NomeD",
idade: 35,
telefone: "66666666",
amigos: ["AmigoA", "AmigoB", "AmigoC", "AmigoD"]
},
{
nome: "NomeE",
idade: 28,
telefone: "55555555",
amigos: ["AmigoA", "AmigoB", "AmigoC", "AmigoD"]
}
];



//12 - Mostre no console o nome de um amigo de cada lista.

cadastro.forEach(pessoa => console.log(pessoa.amigos[0])); // Exibe o primeiro amigo de cada pessoa no cadastro.