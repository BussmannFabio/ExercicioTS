/* Desafio, refaça de forma mais "atualziada"

 Exercicio 1
var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))

// Exercicio 2
var dizerOla = function (nome) {
    if (nome === undefined) { nome = 'Pessoa' }
    console.log('Olá, ' + nome)
}

dizerOla()
dizerOla('Anna')

// Exercicio 3
var nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log('???')

// Exercicio 4
var array = [55, 20]
// Adicionar todos os elementos de "nums" em array
console.log(array)

// Exercicio 5
var notas = [8.5, 6.3, 9.4]
var nota1 = notas[0]
var nota2 = notas[1]
var nota3 = notas[2]
console.log(nota1, nota2, nota3)

// Exercicio 6
var cientista = { primeiroNome: 'Will', expeciencia: 12 }
var primeiroNome = cientista.primeiroNome
var expeciencia = cientista.expeciencia
console.log(primeiroNome, expeciencia)

RESPOSTA
Exercicio 1*/
const mult = (valor:number):number => valor * 2
console.log(mult(10))

// Exercicio 2
const dizerOla = (nome:string = 'Pessoa'):void => {
    console.log('Olá, ' + nome)
}
dizerOla()
dizerOla('Anna')

// Exercicio 3
const nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
array.push(...nums)
// Adicionar todos os elementos de "nums" em array
console.log(...array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
console.log(...notas)

// Exercicio 6
const cientista = { 
    primeiroNome:'Will', 
    experiencia: 12 
}
const {primeiroNome:name, experiencia:exp} = cientista;
console.log(name)
console.log(exp)

