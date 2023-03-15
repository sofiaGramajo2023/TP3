/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo 
 por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/


 function informacion(cadena){

    if(cadena == cadena.toUpperCase()) {
        alert(" está formada sólo por mayúsculas");
      }
      else if(cadena == cadena.toLowerCase()) {
        alert(" está formada sólo por minúsculas");
      }
      else {
        alert(" está formada por mayúsculas y minúsculas");
      }
    
    
}


 do{
    let cadena = prompt ('Ingrese una cadena de texto');

    informacion(cadena);

}while(confirm('Ingrese una cadena de texto') == true);
