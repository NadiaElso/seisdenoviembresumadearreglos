let numero1:number[]= new Array(1);

let numero2:number[]= new Array(1);


let suma:number[]= new Array();



for (let index = 0; index < numero1.length; index++) {
 numero1[index]=prompt("Ingrese un número");
 numero2[index]=prompt("Ingrese un número");
 
 suma [index]+=(numero1+numero2);
 suma++
}


for (let contador = 0; contador < numero1.length; contador++) {
  console.log(` ${numero1[contador]} +${numero2[contador]} es:la suma total es${suma[contador]} ´);
  
}