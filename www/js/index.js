/*
 *
 */

//

jQuery.readyException = function( error ) {
  console.error( error );
};

$("#proximo").click(function(){
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
     var email = $('#email').val();

    /* Validando */
    if (!filter.test(email)) {
        swal(
              'Atenção',
              'Informe um email válido!',
              'question'
        );
        $('#email').focus();
    } else{
        $("#emailInput").hide();
        $("#novoFrame").show();
    }
    
});

$(function($) {
    // Quando o formulário for enviado, essa função é chamada
    $("#cadastro").submit(function() {        
       var cadastroU = {
                nome: $("#nome").val(),                
                email: $("#email").val()
            };     
      
      $.ajax({
        type: "POST",
        url: "http://camisas.info/cliente/",
        data: JSON.stringify(cadastroU),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
           // Quando terminada a requisição 
        swal({
          title: 'Sucesso!',
          text: "Cadastro efetuado com sucesso!",
          type: 'success',
        }).then(function () {
            window.location = "index.html";        
        }) 
        },
        error: function () {
            alert('Erro ao cadastrar!\nTente novamente!');
        }
    });             
      
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
