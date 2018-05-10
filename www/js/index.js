/*
 *
 */

//

jQuery.readyException = function( error ) {
  console.error( error );
};

$("#proximo").click(function(){

     var email = $('#email').val();

    /* Validando */
    if (email.length <= 5) {
        swal(
              'Atenção',
              'Informe um email válido!',
              'question'
        )
    } else{
        $("#emailInput").hide();
        $("#novoFrame").show();
    }
    
});

$(function($) {
    // Quando o formulário for enviado, essa função é chamada
    $("#cadastro").submit(function() {
        // Colocamos os valores de cada campo em uma váriavel para facilitar a manipulação
        var nome = $("#nome").val();
        var email = $("#email").val();

        // Fazemos a requisão ajax com o arquivo envia.php e enviamos os valores de cada campo através do método POST
        $.post('http://camisas.info/cliente/', {nome: nome, email: email});

        // Quando terminada a requisição 
        swal({
          title: 'Cadastro efetuado com sucesso!',
          text: "A FACYNIOS agradesce seu interesse por nossos produtos!",
          type: 'success',
        }).then(function () {
            window.location = "index.html";        
        })              

        // Limpando todos os campos
        $("#nome").val("");
        $("#email").val("");
    });
});


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    }
};