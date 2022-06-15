
/*let precoRefrigerante = 11.99;
let quantidadeRefrigerante = 3;
let totalRefrigerante = precoRefrigerante * quantidadeRefrigerante;

let precoMacarrao = 6.99;
let quantidadeMacarrao = 4;
let totalMacarrao = precoMacarrao * quantidadeMacarrao;

let precoErvilha = 6.99;
let quantidadeErvilha = 3;
let tatalErvilha = precoErvilha * quantidadeErvilha;

let precoArroz = 22.99;
let quantidadeArroz = 3;
let totalArroz = precoArroz * quantidadeArroz;

let precoFeijao = 11.89;
let quantidadeFeijao = 2;
let totalFeijao = precoFeijao * quantidadeFeijao;

let precoVinho = 70.00;
let quantidadeVinho = 3;
let totalVinho = precoVinho * quantidadeVinho;

let totalProdutos = prompt (totalRefrigerante + totalMacarrao + totalFeijao + tatalErvilha + totalArroz + totalVinho);
console.log(totalProdutos);

let totalProdutosSemVinho = (totalRefrigerante + totalMacarrao + totalFeijao + tatalErvilha + totalArroz);
console.log(totalProdutos);


if(totalProdutos %2 == 0){
    let voce = totalProdutosSemVinho / 2  - vinho;
    let amigo = totalProdutosSemVinho / 2 + vinho;
  }else{
    let você = totalProdutos / 2;
    let amigo = totalProdutos / 2;
  }

console.log(if)
console.log(else)*/

        


let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"))
let quantidadeRefrigerante =  parseInt(prompt("Quantas Unidades ?"))

total1 = precoRefrigerante * quantidadeRefrigerante

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

total2 = precoMacarrao * quantidadeMacarrao

let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

total3 = precoErvilha * quantidadeErvilha

let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

total4 = precoArroz * quantidadeArroz

let precoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

total5 = precoFeijao * quantidadeFeijao

let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

total6 = precoVinho * quantidadeVinho

totalProdutos = total1 + total2 + total3 + total4 + total5 + total6
alert(`Valor total a ser pago: ${totalProdutos}`)
let metade = totalProdutos / 2
let vinho = 210


if(totalProdutos % 2 == 0){
    console.log("O valor é par")
    console.log(`Você pagará ${metade - vinho} reais e seu amigo ${metade + vinho} reais.`)
    let voce = metade - vinho;
    let amigo = metade + vinho;
  }else{
    console.log("O valor é ímpar")
    console.log(`Você pagará ${metade} reais e seu amigo ${metade} reais.`)
    let voce = metade;
    let amigo = metade;
  }



        