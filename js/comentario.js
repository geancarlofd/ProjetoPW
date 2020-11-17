
var bdComentario = window.localStorage;
var dadosC = [["Adorei a loja!", "Lino"]];

$(document).ready(function(){

    fLocalMostraComentario();
    fLocalMostraDados();

    $("#bAdicionar").click(function(){

        var comentarios = JSON.parse(bdComentario.getItem("dadosUsuarios"));
        
        var comentario = $("#tComentario").val();
        var nome = $("#tNome").val();
        var aux = [];
        
        aux.push(comentario);
        aux.push(nome);

        comentarios.push(aux);

        console.log(comentarios);

        bdComentario.setItem("dadosUsuarios", JSON.stringify(comentarios));

        fLocalMostraDados();
        
    });

    $("#bLimpar").click(function(){
        $("#tComentario").val("");
        $("#tNome").val("");
    });

});

function fLocalMostraDados(){

    var dados = JSON.parse(bdComentario.getItem("dadosUsuarios"));

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

function fLocalMostraComentario(){

    $("#mostrar").html("");
    
        for(var i = 0; i< dadosC.length; i++){
        
            var conteudo = "";      
    
            conteudo += '<div class="card">';
            conteudo += '<div class="card-body">';
            conteudo += '<blockquote class="blockquote mb-0">';
            conteudo += '<p id="#tComentario">'+ dadosC[i][0] +'</p>';
            conteudo += '<footer class="blockquote-footer comentario-cliente" id="tNome">'+ dadosC[i][1] +'</footer>'
            conteudo += '</blockquote>';
            conteudo += '</div>';
            conteudo += '</div>';
    
            $("#mostrar").append(conteudo);
        }
    
}