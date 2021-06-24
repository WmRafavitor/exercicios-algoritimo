var dados = [];

function populaTabela() {
    if(Array.isArray(dados)) {
        
        localStorage.setItem("__dados__", JSON.stringify(dados));

        $("#tblDados tbody").html("");              //objeto jquery que usa um seletor de id para limpar as linhas de tbody para que possa ser inseridas linhas novas

        dados.forEach(function(item) {             
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.nome}</td>
                <td>${item.sobreNome}</td>
                <td>${item.dataNascimento}</td>
                <td>${item.formacao}</td>
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

        registro.nome = nome;
        registro.sobreNome = sobreNome;
        registro.dtNascimento = dtNascimento;
        registro.formacao = formacao;

        registro.ID = dados.length + 1;

        dados.push(registro);

        alert("Registro salvo com sucesso");
        $("modalRegistro").modal("hide");

        //LIMPEZA DOS CAMPOS
        $("#txtNome").val("");
        $("#txtSobreNome").val("");
        $("#txtDtNascimento").val("");
        $("#txtFormacao").val("");

        populaTabela();
    })
})