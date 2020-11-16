
var banco = window.localStorage;

$(document).ready(function(){

    fLocalMostraDados();

    $("#bAdicionar").click(function(){

        var dados = JSON.parse(banco.getItem("dadosUsuarios"));
        var comentario = $("#tComentario").val();
        var nome = $("#tNome").val();

        var aux = [];
        aux.push(comentario);
        aux.push(nome);

        dados.push(aux);

        console.log(dados);

        banco.setItem("dadosUsuarios", JSON.stringify(dados));

        fLocalMostraDados();
        
    });

    $("#bLimpar").click(function(){
        $("#tComentario").val("");
        $("#tNome").val("");
    });

});

function fLocalMostraDados(){

    var dados = JSON.parse(banco.getItem("dadosUsuarios"));

    $("#mostrar").html("");
    
    if(dados != null){
        for(var i = 0; i< dados.length; i++){
        
            var conteudo = "";      
    
            conteudo += '<div class="card">';
            conteudo += '<div class="card-body">';
            conteudo += '<blockquote class="blockquote mb-0">';
            conteudo += '<p id="#tComentario">'+ dados[i][0] +'</p>';
            conteudo += '<footer class="blockquote-footer comentario-cliente" id="tNome">'+ dados[i][1] +'</footer>'
            conteudo += '</blockquote>';
            conteudo += '</div>';
            conteudo += '</div>';
    
            $("#mostrar").append(conteudo);
        }
    }
}