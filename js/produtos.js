var produtosCarrinho = window.localStorage;
var carrinho = [];
var arrayCanetas = [["Caneta The Caos", "890", "caneta01.jpg"], ["Caneta Rocks", "250", "caneta02.jpg"], ["Kit 3 Canetas Pearl", "450", "caneta03.jpg"],
                    ["Caneta Silver Star", "100", "caneta04.jpg"], ["Caneta Grapes", "450", "caneta05.jpg"], ["Caneta Wood Special", "250", "caneta06.jpg"],
                    ["Kit 3 Canetas Malhada", "22.50", "caneta07.jpg"], ["Kit 5 Canetas Funny", "38.90", "caneta08.jpg"], ["Caneta PomPom Chaveiro", "5", "caneta09.jpg"],
                    ["Caneta Cacto", "4,50", "caneta10.jpg"], ["Caneta Robô Vermelho", "4.50", "caneta11.jpg"], ["Caneta Martelo", "12.50", "caneta12.jpg"],
                    ["Caneta Pinguim", "50.00", "caneta13.jpg"], ["Caneta Bic Azul", "0.30", "caneta14.jpg"], ["Caneta de Choque", "33.40", "caneta15.jpg"]];

$(document).ready(function(){
    fLocalCanetas();

    $(".bComprar").click(function () {
        var id = $(this).attr("idCanetas");

        carrinho.push(arrayCanetas[id]);
        produtosCarrinho.setItem("produtos", JSON.stringify(carrinho));
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

function fLocalCanetas(){
    $("#produtos").html("")

    for(var i =0; i < arrayCanetas.length; i++){
        var conteudo = "";
        var valorProduto = parseFloat(arrayCanetas[i][1]);

        conteudo += '<div class="card card-produtos" style="width: 18rem;">';
        conteudo += '<img src="../img/' + arrayCanetas[i][2] +'" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">'+arrayCanetas[i][0]+'</h5>';
        conteudo += '<p class="card-text">Valor: ' + valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });+'</p>';
        conteudo += '<br><button idCanetas="' + i +'" class="bComprar btn btn-card">Comprar</button>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".produtos-produtos").append(conteudo);

    }
}

