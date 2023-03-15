
let meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviemnre','Diciembre'];

document.write('<ul>')
for(let posicion=0; posicion < meses.length ;posicion++){
    document.write(`<li>${meses[posicion]}</li>`);
}
document.write('</ul>');