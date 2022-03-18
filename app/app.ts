console.log("curso de typescript modo watch")


let lista:string[] = ['claudia', 'diego', 'andres'];
for (const iterator of lista){
    console.log("nombre", iterator)
}



let estadoCivil:boolean = false;
estadoCivil = true;

if (estadoCivil) {
    console.log("casado")
    
} else {
    console.log("soltero")
}


let estadoCi:boolean
estadoCi = false
estadoCi = obtenerEstadoCivil();
console.log("funcion", estadoCi)
function obtenerEstadoCivil(){
    return true;
}



let edad:number = 16

if (edad >= 18) {
    console.log("es mayor de edad")
} else {
    console.log("es menor de edad")
}