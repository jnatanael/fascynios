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


$(document).ready(function () {
    $('#salvar').click(function () { /* Quando clicar em #btn */
        /* Coletando dados */
        var nome = $('#nome').val();
        var email = $('#email').val();

        /* Validando */
        if (nome.length <= 3) {
            swal(
                  'Atenção',
                  'Informe o nome corretamente!',
                  'question'
                )
            return false;
        }

        /* construindo url */
        var urlData = "&nome=" + nome +
                "&email=" + email;

        window.location.href = "agradecimento.html";
/*
  
        $.ajax({
            type: "POST",
            url: "http://cors.io/?http://camisas.info/cliente/",
            data: urlData,
            crossDomain: true,
            success: function () {
              window.location.href = "agradecimento.html";
            },
            error: function(){
                swal(
                  'Oops...',
                  'Algo deu errado! Tente novamente.',
                  'error'
                )
            }
        });
        */
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
