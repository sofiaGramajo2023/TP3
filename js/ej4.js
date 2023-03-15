// Funciones

/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla 
 el resultado devuelto por la función */



function parImpar(numero){

    if( numero %2 ===0){
        alert('El número es par');
    }else{
        alert('El número es impar');
    }

}

do{
    let numero = parseInt(prompt ('Ingrese un número'));

    parImpar(numero);

}while(confirm('Ingrese un número') == true);






