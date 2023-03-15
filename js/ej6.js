/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

●	La fórmula del perímetro  es p = 2*(a +b)
*/


function perimetro(a,b){

    let p = 2*(a +b);

    document.write('El perímetro del rectángulo es:' + p);

}

    let a = parseInt(prompt ('Ingrese el valor del lado de un rectangulo'));

    let b = parseInt(prompt ('Ingrese el valor del otro lado del rectangulo'));

    perimetro(a,b);



