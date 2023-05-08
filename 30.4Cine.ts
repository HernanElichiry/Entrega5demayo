import * as rls from "readline-sync";

//• Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
//• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
//• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
//• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada

let butacasdecinearray: number[] = new Array ();

let cargarArray = function(array: number[], dimensionArray: number): number[]{
    let posicionAlAzar;
    for(let i:number = 0; i < dimensionArray; i++){
    posicionAlAzar = Math.round(Math.random());
    array.push(posicionAlAzar);
   
}  return (array); 
} // carga el array butacas con 0 y 1 de forma aleatoria. 0 significa libre y 1 butaca ocupada.
  //los parametros a ingresar son: el array numerico a cargar y un numero con la dimension del arreglo.


cargarArray(butacasdecinearray,100);//cargo la funcion con un array que representa el cine 
                                    //y un numero que representa la cantidad de butacas.
console.log(butacasdecinearray);

let CuentaButacas = function(butacas: number[]){
    let desocupadas: number = 0;
    for(let i = 0; i < butacas.length; i++){
    if(butacas[i] != 1){
       desocupadas ++;
    } 
} return (desocupadas);

}//recorro el arreglo contando las butacas desocupadas.

console.log("Quedan", CuentaButacas(butacasdecinearray), "Butacas libres"); 