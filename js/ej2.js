
let ciudades =[];


do{

    let ciudad =prompt('Escriba una Ciudad')
    ciudades.push (ciudad);





}while(confirm('Ingrese una ciudad') == true);

ciudades.push('Paris');
ciudades[1]='Barcelona';

document.write(ciudades);

document.write(`<h2> Cantidad de elementos del arreglo: ${ciudades.length} </h2>`);

    document.write("<br>");

	document.write(`El primer elemento es: ${ciudades[0]}`);
	document.write("<br>");
	document.write(`El tercer elemento es: ${ciudades[2]}`);
	document.write("<br>");

	valorUltimo = ciudades[ciudades.length-1]
	document.write(`El último elemento es: ${valorUltimo}`);
	document.write("<br>");
    document.write("<br>");

    document.write(`El elemento que ocupa la segunda posición es: ${ciudades[1]}`);

    