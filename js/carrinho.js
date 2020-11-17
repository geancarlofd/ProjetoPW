var produtosCarrinho = window.localStorage;

$(document).ready(function () {
    atualizarCarrinho();
    $("#bEsvaziarCarrinho").click(function () { 
        produtosCarrinho.clear();
        atualizarCarrinho();
    });

    $(".btn-excluir-iten").click(function () {
        var novaLista = JSON.parse(produtosCarrinho.getItem("produtos"));
        var id = $(this).attr("idExcluir");
        
        novaLista.splice(id,1);
        produtosCarrinho.setItem("produtos", JSON.stringify(novaLista));
        window.location.reload();
    });
});

function atualizarCarrinho() {
    var produtos = JSON.parse(produtosCarrinho.getItem("produtos"));
    var permitir = true;
    $("#carrinho").html("");

    if (produtos != null){
        for (var i = 0; i < produtos.length; i++) {
            var conteudo = "";
            var valorProduto = parseFloat(produtos[i][1]);

            conteudo += '<div class="card-carrinho">';
            conteudo += '<img src="../img/' + produtos[i][2] + '" class="img-produto" />';
            conteudo += '<div class="descricao-carrinho">';
            conteudo += '<div class="texto-descricao-carrinho">';
            conteudo += '<h5 class="h6-texto-descricao">' + produtos[i][0] + '</h5>';
            conteudo += '<h6 class="h5-texto-descricao">Quantidade: 1</h6>';
            conteudo += '<h6 class="h5-texto-descricao">' + valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });+ '</h6>';
            conteudo += '</div>';
            conteudo += '</div>';
            conteudo += '<div><button idExcluir='+i+' class="btn-excluir-iten">Excluir</button></div>';
            conteudo += '</div><br></br>';

            $("#carrinho").append(conteudo);
        }
    }else{
        permitir = false;
    }
    atualizarValorCarrinho(permitir);
}

function atualizarValorCarrinho(permitir){
    $("#tValorPreco").html("");

    var produtos = JSON.parse(produtosCarrinho.getItem("produtos"));
    var subtotal = 0;
    var frete = 0;
    var total = 0;
    if(permitir == true){
        for (var i = 0; i < produtos.length; i++) {
            subtotal += parseFloat(produtos[i][1]);
        }
    }
    console.log(subtotal);
    
    total = subtotal + frete; 

    var conteudo = "";

    conteudo += 'Subtotal: ' + subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+'<br>';
    conteudo += 'Frete: ' + frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +'<br>';
    conteudo += 'Total: ' + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    $("#tValorPreco").append(conteudo);
}