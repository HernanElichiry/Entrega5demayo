import * as rls from "readline-sync";

//Promedio Escolar
//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres

const arrDim: number = rls.questionInt("cantidad de alumnos?:  "); // cargar la (dimension del arreglo) de alumnos.
let alumnos: string[] = new Array(arrDim);
let nota1: number[] = new Array(arrDim);
let nota2: number[] = new Array(arrDim);
let nota3: number[] = new Array(arrDim);
let promedio: number[] = new Array(arrDim);

for(let i = 0; i < alumnos.length; i++){    //cargar los nombres de los alumnos en el arreglo y las 3 notas.
    alumnos[i] = rls.question(`ingrese el nombre del alumno: `);
    nota1[i] = rls.questionInt(`ingrese la nota del primer trimestre: `);   
    nota2[i] = rls.questionInt(`ingrese la nota del segundo trimestre: `);
    nota3[i] = rls.questionInt(`ingrese la nota del tercer trimestre: `);     
   
} 
//obtener el promedio anual de sus tres notas de un alumno 

for (let i: number = 0; i < promedio.length; i++) { 
    promedio[i] = (nota1[i] + nota2[i] + nota3[i]) /3; 
    console.log( "el Alumno" , alumnos[i], "tiene promedio", promedio[i]);
}

//Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información*/

