function calcularTabuada() {
    let number = document.querySelector("#select_number");
    let showTT = document.querySelector("#box_select");

    if(number.value == false) {
        alert("Por favor, digite um número");
    } else {
        let n = +number.value;
        showTT.innerHTML = "";
        for(c = 1; c <= 10; c++) {
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n * c}`
            showTT.appendChild(item);
        }
    }
}