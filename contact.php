<?php

    //llamando a los campos

    $nombre = $_POST ['name'];
    $email = $_POST ['email'];
    $phone = $_POST ['phone'];
    $message = $_POST ['message'];

    //DATOS PARA EL CORREO

    $destinatario = "pedro.ssanchez@hotmail.com";
    $asunto = "Contacto desde la web";
    
    $contenido = "De: $nombre \n";
    $contenido .= "Correo: $email \n";
    $contenido .= "Telefono: $phone \n";
    $contenido .= "$message";

    //ENVIANDO MAIL

    mail($destinatario, $asunto, $contenido);
    header('Location:msjEnviado.html')

?>
