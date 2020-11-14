var arrayCanetas = [["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],
                    ["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],
                    ["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],
                    ["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],
                    ["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false],["Caneta The Caos", "R$500,00", false]];

$(document).ready(function(){
    fLocalCanetas();
});

function fLocalCanetas(){
    $("#produtos").html("")

    for(var i =0; i < arrayCanetas.length; i+=3){
        var conteudo = "";

        conteudo +='<div class="cards-produtos">';
        conteudo += '<div class="card card-produtos" style="width: 18rem;">';
        conteudo += '<img src="../img/caneta01.jpg" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">'+arrayCanetas[i][0]+'</h5>';
        conteudo += '<p class="card-text">Valor: ' + arrayCanetas[i][1] +'</p>';
        conteudo += '<a href="#" class="btn btn-card">Comprar</a>';
        conteudo += '</div>';
        conteudo += '</div>';

        conteudo += '<div class="card card-produtos" style="width: 18rem;">';
        conteudo += '<img src="../img/caneta01.jpg" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">' + arrayCanetas[i+1][0] +'</h5>';
        conteudo += '<p class="card-text">Valor: ' + arrayCanetas[i+1][1] +'</p>';
        conteudo += '<a href="#" class="btn btn-card">Comprar</a>';
        conteudo += '</div>';
        conteudo += '</div>';

        conteudo += '<div class="card card-produtos" style="width: 18rem;">';
        conteudo += '<img src="../img/caneta01.jpg" class="card-img-top card-imagem" alt="...">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title">' + arrayCanetas[i+2][0] +'</h5>';
        conteudo += '<p class="card-text">Valor: ' + arrayCanetas[i+2][1] +'</p>';
        conteudo += '<a href="#" class="btn btn-card">Comprar</a>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".produtos-produtos").append(conteudo);
    }
}