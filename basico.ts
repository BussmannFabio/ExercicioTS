// Desafios
// Exercicio 1
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