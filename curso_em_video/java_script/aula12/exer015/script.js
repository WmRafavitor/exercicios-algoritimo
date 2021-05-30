function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.querySelector('#txtano');
    var res = document.querySelector('#res');

    if(formAno.value.length === 0 || Number(formAno.value) > ano) {
        alert("[ERRO]verifique os dados e tente novamente;");
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = "";
        var img = document.querySelector("img");
        img.setAttribute('id', 'foto');
        if(formSex[0].checked) {
            genero = "Homem"
            document.body.style.background = '#6495ed';
            // switch(idade) {
            //     case idade === 0 || idade <= 1:
            //         genero = "Bebê"
            //         img.src = 'bebe_menino.png';
            //         break;
            //     case idade < 12:
            //         genero = "menino";
            //         img.src = 'crianca_menino.png';
            //         break;
            //     case idade < 17:
            //         genero = "adolescente";
            //         img.src = 'adolescente_homem.png';
            //         break;
            //     case idade < 22:
            //         img.src = 'jovem_menino.png';
            //         break;
            //     case idade < 30:
            //         img.src =  'homem2.png';
            //         break;
            //     case idade < 40:
            //         img.src = 'homem3.png';
            //         break;
            //     case idade < 52:
            //         img.src = 'homem4.png';
            //         break;
            //     case idade >= 53:
            //         img.src = 'senhor2.png';
            // }

            if(idade === 0 || idade <= 1) {
                genero = "Bebê"
                img.src = 'bebe_menino.png';
            } else if (idade < 12 ) {
                genero = "menino";
                img.src = 'crianca_menino.png';
            } else if (idade < 17) {
                genero = "adolescente";
                img.src = 'adolescente_homem.png';
            } else if(idade < 22) {
                img.src = 'jovem_menino.png';
            } else if(idade < 30) {
                img.src =  'homem2.png';
            } else if (idade < 40) {
                img.src = 'homem3.png';
            } else if (idade < 52) {
                img.src = 'homem4.png';
            } else {
                img.src = 'senhor2.png';
            }
        } else if (formSex[1].checked) {
            genero = "Mulher"
            document.body.style.background = '#ffc0cb';
            if(idade === 0 || idade <= 1) {
                genero = "Bebê"
                img.src = 'bebe_menina.png';
            } else if (idade < 12) {
                genero = "Menina";
                img.src = 'crianca_menina.png';
            } else if(idade < 17) {
                genero = "Adolescente";
                img.src = 'adolescente_mulher.png';
            } else if(idade < 22) {
                img.src = 'jovem_menina.png';
            } else if(idade < 30) {
                img.src = 'mulher2.png';
            } else if(idade < 40) {
                img.src = 'mulher3.png';
            } else if(idade < 52) {
                img.src = 'mulher4.png'
            } else if(idade < 75) {
                img.src = 'senhora2.png';
            } else {
                genero = "Velha";
                img.src = 'velha.png';  
            }
        }
        res.style.textAlign = "center";
        if(idade === 0 || idade <=1) {
            res.innerHTML = `<h2>Identificamos ${genero} com ${idade} ano</h2>`;
        } else {
            res.innerHTML = `<h2>Identificamos ${genero} com ${idade} anos</h2>`;
        }
        
    }
}