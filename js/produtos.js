var produtosCarrinho = window.localStorage;
var carrinho = [];
var arrayCanetas = [["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"],
                    ["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"],
                    ["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"], ["Caneta The Caos", "500.00", "caneta01.jpg"]];

$(document).ready(function(){
    fLocalCanetas();

    $(".bComprar").click(function () {
        var id = $(this).attr("idCanetas");

        carrinho.push(arrayCanetas[id]);
        produtosCarrinho.setItem("produtos", JSON.stringify(carrinho));
    });
});

function fLocalCanetas(){
    $("#produtos").html("")

    for(var i =0; i < arrayCanetas.length; i++){
        var conteudo = "";

        conteudo += '<div class="card card-produtos" style="width: 18rem;">';
        conteudo += '<img src="../img/' + arrayCanetas[i][2] +'" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">'+arrayCanetas[i][0]+'</h5>';
        conteudo += '<p class="card-text">Valor: R$' + arrayCanetas[i][1] +'</p>';
        conteudo += '<button idCanetas="' + i +'" class="bComprar btn btn-card">Comprar</button>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".produtos-produtos").append(conteudo);

    }
}

