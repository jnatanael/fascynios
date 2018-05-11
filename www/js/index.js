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
        $("#body").removeClass('bg1');
        $("#body").addClass('bg2');
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
        url: "http://174.138.44.156:8080/cliente/",
        data: JSON.stringify(cadastroU),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function () {
           // Quando terminada a requisição 
            window.location = "agradecimento.html";        
        
        },
        error: function () {
            swal({ 
                title: 'Erro!', 
                text: "Não foi possível efetuar o cadastro. Tente novamente!", 
                type: 'error', 
            }).then(function () { 
                window.location = "index.html";         
            }) 
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
