document.getElementById ('botonContactar').addEventListener ("click", function(){
    document.getElementById ('ocultarBarra').style.display = 'none';
    document.getElementById ('seccion_formulario').style.display = 'block';
})


document.getElementById ('formularioContacto').addEventListener ("submit" , function () {
    console.log ("Formulario enviado");
    window.alert ("Muchas gracias por su interes! Me pondré en contacto con ustedes a la brevedad");
})

