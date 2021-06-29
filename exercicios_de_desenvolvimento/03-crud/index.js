var dados = [];

function apagaReginstro(id) {
    let _confirm = confirm("Deseja realmente excluir este registro?");

    if(_confirm) {
        for(let i = 0; i < dados.length; i++) {
            if(dados[i].ID == id) {
                dados.splice(i, 1);
            }
        }
        populaTabela();
    }
}

function editaRegistro(id) {
    $("#modalRegistro").modal("show");

    dados.forEach(function(item) {
        if(item.ID == id) {
            $("hdID").val(item.ID);
            $("#txtNome").val(item.nome);
            $("#txtSobreNome").val(item.sobreNome);
            $("#txtDtNascimento").val(item.dtNascimento.substr(6, 4) + "-" + item.dtNascimento.substr(3, 2) + "-" + item.dtNascimento.substr(0, 2));
            $("#txtFormacao").val(item.formacao);
        }
    })
}

function populaTabela() {
    if(Array.isArray(dados)) {
        
        localStorage.setItem("__dados__", JSON.stringify(dados));

        $("#tblDados tbody").html("");              //objeto jquery que usa um seletor de id para limpar as linhas de tbody para que possa ser inseridas linhas novas

        dados.forEach(function(item) {             
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.nome}</td>
                <td>${item.sobreNome}</td>
                <td>${item.dtNascimento}</td>
                <td>${item.formacao}</td>
                <td><button type="button" class="btn btn-primary" onclick="javascript:editaRegistro(${item.ID});"><i class="far fa-edit"></i></button></td>
                <td><button tupe="button" class="btn btn-danger" onclick="javascript:apagaReginstro(${item.ID});"><i class="far fa-trash-alt"></i></button></td>
            </tr>`)                                        
        })
    }
}

$(function () {
    //essa function executa ao carregar a tela
    dados = JSON.parse(localStorage.getItem("__dados__"));

    if(dados) {
        populaTabela();
    }

    $("#btnSalvar").click(function() {

        let _id = $("#hdID").val();
        let nome = $("#txtNome").val();
        let sobreNome= $("#txtSobreNome").val();
        let dtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {timeZone: "UTC"}); //A VARIÁVEL RECEBE UM NEW DATE PARA CONVERTER A DATA EM HORÁRIO BRASILEIRO
        let formacao = $("#txtFormacao").val();

        if(!_id || _id == "0") {
            let registro = {};
            registro.nome = nome;
            registro.sobreNome = sobreNome;
            registro.dtNascimento = dtNascimento;
            registro.formacao = formacao; 

            dados.push(registro);
            registro.ID = (dados.length + 1);
        } else {
            dados.forEach(function(item) {
                if(item.ID == _id) {
                    item.nome = nome;
                    item.sobreNome = sobreNome;
                    item.dtNascimento = dtNascimento;
                    item.formacao = formacao;
                }
            })
        }




        alert("Registro salvo com sucesso");
        $("#modalRegistro").modal("hide");

        //LIMPEZA DOS CAMPOS
        $("hdID").val("0");
        $("#txtNome").val("");
        $("#txtSobreNome").val("");
        $("#txtDtNascimento").val("");
        $("#txtFormacao").val("");

        populaTabela();
    })
})