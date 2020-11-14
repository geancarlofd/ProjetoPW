var usuarios = [];
var bdUser = window.localStorage;

var globalErrorCampo = false;

$(document).ready(function () {

    $("#tNome").focus();

    $("#but").click(function () {

        globalErrorCampo = false;

        verificador('#tNome');
        verificador('#tSobrenome');
        verificador('#tEmail');
        verificador('#tSenha');
        verificador('#tConfirmSenha');
        senhasConfirm();

        if (globalErrorCampo == false) {
            adicionarUser();
            limparCampos();
            window.location.href = "../index.html";
        }
    });
});


function verificador(idCampo) {

    var valor = $(idCampo).val();

    if (valor == "") {
        $(idCampo).removeClass("firstInput").addClass("newInput");
        globalErrorCampo = true;
    }
    else {
        $(idCampo).removeClass("newInput").addClass("firstInput");
    }
}

function senhasConfirm() {
    if ($("#tSenha").val() == $("#tConfirmSenha").val()) {

        $("#erro").html("");
        $("#tSenha").removeClass("newInput").addClass("firstInput");
        $("#tConfirmSenha").removeClass("newInput").addClass("firstInput");
    }
    else {
        $("#erro").html("Senhas não compatíveis");

        $("#tSenha").removeClass("firstInput").addClass("newInput");;
        $("#tConfirmSenha").removeClass("firstInput").addClass("newInput");
        globalErrorCampo = true;
    }
}

function adicionarUser() {

    aux = [];
    aux.push($("#tNome").val());
    aux.push($("#tSobrenome").val());
    aux.push($("#tEmail").val());
    aux.push($("#tSenha").val());

    usuarios.push(aux);
    console.log(aux);

    bdUser.setItem("dados", JSON.stringify(usuarios));
}

function limparCampos() {
    $("#tNome").val("");
    $("#tSobrenome").val("");
    $("#tEmail").val("");
    $("#tSenha").val("");
    $("#tConfirmSenha").val("");
}