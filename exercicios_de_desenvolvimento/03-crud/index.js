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
                <td><button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button></td>
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
        let nome = $("#txtNome").val();
        let sobreNome= $("#txtSobreNome").val();
        let dtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {timeZone: "UTC"}); //A VARIÁVEL RECEBE UM NEW DATE PARA CONVERTER A DATA EM HORÁRIO BRASILEIRO
        let formacao = $("#txtFormacao").val();

        let registro = {};

        registro.ID = (dados.length + 1);
        registro.nome = nome;
        registro.sobreNome = sobreNome;
        registro.dtNascimento = dtNascimento;
        registro.formacao = formacao;   

        dados.push(registro);

        alert("Registro salvo com sucesso");
        $("#modalRegistro").modal("hide");

        //LIMPEZA DOS CAMPOS
        $("#txtNome").val("");
        $("#txtSobreNome").val("");
        $("#txtDtNascimento").val("");
        $("#txtFormacao").val("");

        populaTabela();
    })
})