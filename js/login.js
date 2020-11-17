var bdUser = window.localStorage;

$(document).ready(function () {
    $("#inputUser").focus();

    $("#btnLogin").click(function () {
        limparErro();
        verificarUsuario();
    });
});

function verificarUsuario() {
    var user = $("#inputUser").val();
    var senha = $("#inputSenha").val();

    var dados = JSON.parse(bdUser.getItem("dados"));

    if(dados != null) {
        for (var i = 0; i < dados.length; i++) {
            if (user == dados[i][0] || user == dados[i][2]) {
                if (senha == dados[i][3])
                    window.location.href = "../index.html";
                else {
                    erro();
                }
            }
            else {
                erro();
            }

        }
    }
    else {
        erro();
    }
}

function limparInput(){
    $("#inputUser").val("");
    $("#inputSenha").val("");
}

function erro(){
        $("#trErro").addClass("tr-erro");
        $("#trErro").html("<td>Usuário ou Senha incorretos</td>");
        limparInput();
}
    
function limparErro(){
        $("#trErro").removeClass("tr-erro");
        $("#trErro").html("");
}
