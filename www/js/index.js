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
        $("#SeuEmail").hide();
        $("#body").removeClass('bg1');
        $("#body").addClass('bg2');
        $("#seuNome").show();
        $("#novoFrame").show();
    }
    
});

$(function($) {
    // Quando o formulário for enviado, essa função é chamada
    $("#cadastro").submit(function() {        
     
        evt.preventDefault(); //prevents the default action       
      
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
