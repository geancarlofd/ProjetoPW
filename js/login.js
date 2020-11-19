var bdUser = window.localStorage;

$(document).ready(function () {
    $("#inputUser").focus();

    $("#btnLogin").click(function () {
        limparErro();
        verificarUsuario();
    });
    $("#iconFace").click(function () {
        window.location.href = "https://m.facebook.com/dinosandcomics/"
    });
    $("#iconInsta").click(function () {
        window.location.href = "https://www.instagram.com/canetas.personalizada/"
    });
    $("#iconTwi").click(function () {
        window.location.href = "https://twitter.com/bic_brasil"
    });
    $("#iconPin").click(function () {
        window.location.href = "https://br.pinterest.com/pin/491173903086032213/"
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
