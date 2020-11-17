var produtosIndex = window.localStorage;
var arrayCanetasIndex = [["Caneta The Caos", "890", "caneta01.jpg"], ["Caneta Bic Azul", "0.30", "caneta14.jpg"], ["Kit 3 Canetas Pearl", "450", "caneta03.jpg"]];
var carrinhoIndex = []
$(document).ready(function () {
    fLocalCanetas();

    $(".bComprar").click(function () {
        var id = $(this).attr("idCanetas");

        carrinhoIndex.push(arrayCanetasIndex[id]);
        produtosIndex.setItem("index", JSON.stringify(carrinhoIndex));
        console.log(carrinhoIndex);
    });
});

function fLocalCanetas() {
    $("#produtos-index").html("")

    for (var i = 0; i < arrayCanetasIndex.length; i++) {
        var conteudo = "";
        var valorProduto = parseFloat(arrayCanetasIndex[i][1]);

        conteudo += '<div class="card card-index" style="width: 18rem;">';
        conteudo += '<img src="img/' + arrayCanetasIndex[i][2] + '" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">' + arrayCanetasIndex[i][0] + '</h5>';
        conteudo += '<p class="card-text">Valor: ' + valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); +'</p>';
        conteudo += '<br><button idCanetas="' + i + '" class="bComprar btn btn-card">Comprar</button>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".produtos-index").append(conteudo);

    }
}