var produtosCarrinho = window.localStorage;

$(document).ready(function () {
    atualizarCarrinho();
    atualizarValorCarrinho();
});

function atualizarCarrinho() {
    var produtos = JSON.parse(produtosCarrinho.getItem("produtos"));
    $("#carrinho").html("");

    for (var i = 0; i < produtos.length; i++) {
        var conteudo = "";

        conteudo += '<div class="card-carrinho">';
        conteudo += '<img src="../img/'+produtos[i][2]+'" class="img-produto" />';
        conteudo += '<div class="descricao-carrinho">';
        conteudo += '<div class="texto-descricao-carrinho">';
        conteudo += '<h5 class="h6-texto-descricao">'+produtos[i][0]+'</h5>';
        conteudo += '<h6 class="h5-texto-descricao">Quantidade: 1</h6>';
        conteudo += '<h6 class="h5-texto-descricao">'+produtos[i][1]+'</h6>';
        conteudo += '</div>';
        conteudo += '</div>';
        conteudo += '<div><button class="btn-excluir-iten">Excluir</button></div>';
        conteudo += '</div><br></br>';

        $("#carrinho").append(conteudo);
    }
}

function atualizarValorCarrinho(){
    var produtos = JSON.parse(produtosCarrinho.getItem("produtos"));
    var subtotal = 0;
    for (var i = 0; i < produtos.length; i++) {
        subtotal += parseInt(produtos[i][1]);
    }
    console.log(subtotal);
}