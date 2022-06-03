<?php
 
 $name = $_POST['name' + 'lname'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 $message = $_POST['message'];
 $para = 'pedro.ssanchez@hotmail.com';
 $titulo = 'Hola, queria mas informacion';
  
 $msjCorreo = "Nombre: $name\n E-Mail: $email\n Telefono: $phone\n Mensaje:\n $message";
  
 if ($_POST['submit']) {
 if (mail ($para, $titulo, $msjCorreo)) {
 echo 'Gracias por comunicarse con nosotros, a la brevedad nos pondremos en contacto';
 } else {
 echo 'Falló el envio, intente nuevamente';
 }
 }
 
?>
