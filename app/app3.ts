console.log("archivo tres")

let numero = [2,5, 6, ""]

numero.push("diego")

console.log(numero)


let personas = ["diego", "claudia", "carol"]

console.log(personas[1])

//////tuplas

let datos:[string, number]

datos = ["villamil", 30]

console.log("tupla", datos, " acceder a posición 1", datos[0])


//////enumeración

enum Estado{
    activo = 30,
    inactivo = 40
}

console.log("enumeración", Estado.activo)


//////////////type assertions

let valor:any = "hola estoy aprendiendo typescript";

let caracteres:number = (<string> valor).length
let caracteres2:number = (valor as string).length

console.log("forma 1 ",caracteres, " forma 2 ", caracteres2)

