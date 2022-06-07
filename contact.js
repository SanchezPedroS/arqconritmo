$(document) .ready(function(){

    $('#boton-enviar').click(function(){
        
        var errores = '';

        // Validado Nombre ==============================
        if( $('#fname').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#fname').css("border-bottom-color", "#F14B4B")
        } else{
            $('#fname').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#message').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#message').css("border-bottom-color", "#F14B4B")
        } else{
            $('#message').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });



    });
});
