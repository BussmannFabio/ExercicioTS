"use strict";
class data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new data(2, 9, 2002);
console.log(aniversario);
const casamento = new data;
casamento.mes = 3;
console.log(casamento);
// MELHORANDO
class dataEx {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEx = new dataEx(29, 6, 1999);
console.log(aniversarioEx);
const casamentoEx = new dataEx;
casamentoEx.mes = 9;
console.log(casamentoEx);
//Desafio
//Atributos: nome, preço e desconto
//Criar o construtor
//valor padrao desconto 0
//Criar 2 produtos
class produtos {
    constructor(nome = 'teste', preco = 0, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
let Processador = new produtos('Processador', 450, 0.75);
console.log(Processador);
let Memoria = new produtos('Memoria', 200, 0.8);
console.log(Memoria);
const Gabinete = new produtos;
Gabinete.nome = 'Gabinete';
Gabinete.preco = 450;
Gabinete.desconto = 0;
console.log(Gabinete);
//# sourceMappingURL=classes.js.map