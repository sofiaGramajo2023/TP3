/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener
 números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar
  dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/ 

  let sumas =[];
  let contador1=0;
  let contador2=0;
  let contador3=0;
  let contador4=0;
  let contador5=0;
  let contador6=0;
  let contador7=0;
  let contador8=0;
  let contador9=0;
  let contador10=0;
  let contador11=0;
  let contador12=0;


  for (i=0 ; i< 50 ; i++){
   

    let num1=Math.round(Math.random()*(6-1)+parseInt(1));
    let num2=Math.round(Math.random()*(6-1)+parseInt(1));
    

    let suma = (num1 + num2);
  
    

    switch (suma) {
       case 1: {
             contador1=contador1+1;
             sumas.push(contador1);

       }
        break;
       case 2: {
            contador2=contador2+1;
            sumas.push(contador2);
        }
        break;
        case 3: {
            contador3=contador3+1;
            sumas.push(contador3);
            }
        break;
        case 4: {
            contador4=contador4+1;
            sumas.push(contador4);
            }
        break;
        case 5: {
            contador5=contador5+1;
            sumas.push(contador5);
            }
        break;
        case 6: {
            contador6=contador6+1;
            sumas.push(contador6);
            }
        break;
        case 7: {
            contador7=contador7+1;
            sumas.push(contador7);
            }
        break;
        case 8: {
            contador8=contador8+1;
            sumas.push(contador8);
            }
        break;
        case 9: {
            contador9=contador9+1;
            sumas.push(contador9);
            }
        break;
        case 10: {
            contador10=contador10+1;
            sumas.push(contador10);
            }
        break;
        case 11: {
            contador11=contador11+1;
            sumas.push(contador11);
            }
        break;
        case 12: {
            contador12=contador12+1;
            sumas.push(contador12);
            }
            break;
    }
    

  }
  
  document.write("El 1 ha salido " +  sumas[contador1] + " veces<br>");
  document.write("El 2 ha salido " +  sumas[contador2] + " veces<br>");
  document.write("El 3 ha salido " +  sumas[contador3] + " veces<br>");
  document.write("El 4 ha salido " +  sumas[contador4] + " veces<br>");
  document.write("El 5 ha salido " +  sumas[contador5] + " veces<br>");
  document.write("El 6 ha salido " +  sumas[contador6] + " veces<br>");
  document.write("El 7 ha salido " +  sumas[contador7] + " veces<br>");
  document.write("El 8 ha salido " +  sumas[contador8] + " veces<br>");
  document.write("El 9 ha salido " +  sumas[contador9] + " veces<br>");
  document.write("El 10ha salido " +  sumas[contador10] + " veces<br>");
  document.write("El 11 ha salido " +  sumas[contador11] + " veces<br>");
  document.write("El 12 ha salido " +  sumas[contador12] + " veces<br>");

  document.write(`El arreglo de 50 repeticiones es: ${sumas}`);