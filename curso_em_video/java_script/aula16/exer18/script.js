let valueNumber = document.querySelector('#valueNumber'); //declarando as variavais que vou usar para capturar os valores do HTML
let showValue = document.querySelector('#showValue');   //declarando as variavais que vou usar para capturar os valores do HTML
let result = document.querySelector('#result')          //declarando as variavais que vou usar para capturar os valores do HTML
let receiveNumber = [];                                 // Array para ser inserido os valores que vou precisar usar para printar no html

function inNumber(num) {                        // função que confere se o número digitado está entre 1 e 100
    if(Number(num) >= 1 && Number(num) <= 100) { 
        return true;
    } else {
        return false;
    }
}

function inList(num, list) {  //função que confere se foi digitado algum valor
    if(list.indexOf(Number(num)) != -1) { // indexOf quando retorna -1 quer dizer que não ha valor na input, use '!' para inverter esse valor
        return true;
    } else {
        return false;
    }
}

function captureValue() {       //função que adiciona valores no select
    if(inNumber(valueNumber.value) && !inList(valueNumber.value, receiveNumber)) { // confere se o valor foi digitado ou se o valor já existe na lista chamando as duas funções que criei 
        receiveNumber.push(Number(valueNumber.value));                              // e passa os parametros para fazer a conferência caso haja valor, e ele ainda não tenha sido digitado, ele adiciona o valor na lista
        let item = document.createElement('option');                // esta variável cria um option no select do html
        item.text =`O valor ${valueNumber.value} adicionado`;       //e adiciona o texto atravéz de uma template string
        showValue.appendChild(item);                                // adiciona o texto na variável no elemento criado
        result.innerHTML = "";                                      // resultado se torna vazio novamente caso tenha sido adicionado um valot
    } else {
        alert("Valor inválido ou já encontrado na lista.");
    }
    valueNumber.value = '';
    valueNumber.focus();
}

function resultValues() { // essa função adiciona no id abaixo do select os calculos realizado
    if(receiveNumber.length ==0) {
        alert("Adicione valores antes de finaizar");
    } else {
        let totalNumber = receiveNumber.length;
        let biggerNumber = receiveNumber[0];
        let smallerNumber = receiveNumber[0];
        let addNumber = 0;
        let averageNumber = 0;
        for(let position in receiveNumber) {
            addNumber += receiveNumber[position];
            if(receiveNumber[position] > biggerNumber) {
                biggerNumber = receiveNumber[position];
            } if(receiveNumber[position] < smallerNumber) {
                smallerNumber = receiveNumber[position];
            }
        }
        averageNumber = addNumber / totalNumber;
        result.innerHTML = "";
        result.innerHTML += `<p>Ao todo temos ${totalNumber} numeros cadastrados</p>`
        result.innerHTML += `<p>O maior valor é ${biggerNumber}</p>`
        result.innerHTML += `<p>O menor valor é ${smallerNumber}</p>`
        result.innerHTML += `<p>a soma de todos os valores é ${addNumber}</p>`;
        result.innerHTML += `<p>A Média entre eles é ${averageNumber}</p>`
    }
}