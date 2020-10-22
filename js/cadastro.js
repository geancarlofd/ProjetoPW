var globalErrorCampo = false;

$(document).ready(function () {

    $("#tNome").focus();

    $("#but").click(function () {

        globalErrorCampo = false;

        verificador('#tNome');
        verificador('#tSobrenome');
        verificador('#tEmail');
        verificador('#tMatricula');
        verificador('#tUsuario');
        verificador('#tSenha');
        verificador('#tConfirmSenha');
        senhasConfirm();

        if (globalErrorCampo == false) {
            limparCampos();
            alert('Formulario enviado com sucesso');
            $("#tNome").focus();
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

function limparCampos() {
    $("#tNome").val("");
    $("#tSobrenome").val("");
    $("#tEmail").val("");
    $("#tMatricula").val("");
    $("#tUsuario").val("");
    $("#tSenha").val("");
    $("#tConfirmSenha").val("");
}