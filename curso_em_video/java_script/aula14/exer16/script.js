function count() {
    let valueStart = document.querySelector('#value_start');
    let valueEnd = document.querySelector('#value_end');
    let valueJump = document.querySelector('#value_jump');
    let res = document.querySelector('#response')

    if(valueStart.value == false || valueEnd.value == false) { //este if garante que o alert vai dar erro caso os campos tenha valor 0 ou não tenha valor algum
        alert("Impossível contar");
    } else {
        res.innerHTML = "Contando :" // este inner precisa estar no começo para mudar o valor do Html, caso contrário os números aparecerão junto com o valor antigo

        let start = +valueStart.value; // convertendo o tipo dos números que vem como string para number
        let end = +valueEnd.value; // convertendo o tipo dos números que vem como string para number
        let jump = +valueJump.value; // convertendo o tipo dos números que vem como string para number
        if(jump == 0) {
            alert("Passo inválido, considerando 1 como valor");
            jump = 1;
        }
        if(start < end) {
            //contagem crescente
            for(i = start; i <= end; i += jump) {
                res.innerHTML += `${i} \u{1F449} `;
            }
        } else {
            //contagem regressiva
            for(i = start; i >= end; i -= jump) {
                res.innerHTML += `${i} \u{1F449}`;
            }
           
        }
    }
        
    res.innerHTML += `\u{1F3c1}`; // sempre que for para manter o valor do innerHTML deve-se fazer innerHTML = innerHTML + valor, ou innerHTML += valor
}