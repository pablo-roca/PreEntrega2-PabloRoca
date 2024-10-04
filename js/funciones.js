function crear_Usuario(){
    persona.nombre = prompt("ingrese usuario")
    persona.con = prompt("ingrese contraseña")
}

function ingresar(){
    let nombre = prompt("ingrese usuario")
    let con = prompt("ingrese contraseña")

    if ((persona.nombre == nombre)&& (persona.con == con)){
        return true
    }
    else{
        return false
    }
}

function menu(){
    let seguir = true;

    while (seguir) {
        let op = prompt("1) comprar \n2) ver carrito \n3)terminar compra \n4) borrar una compra \n5) salir")
        if(op == 1){
            let opcion = prompt(mostrarProductos() + "\nIngrese el número del producto que desea agregar al carrito (o 'salir' para finalizar):")
            if(opcion != NaN){
            persona.carrito.agregarProducto(opcion)
            }
        }
        else if( op == 2){
            alert(persona.carrito.mostrarCarrito())
        }
        else if( op == 3){
            alert(persona.carrito.mostrarCarrito() +"\n Gracias por su compra")
            persona.carrito.vaciarCarro()
            break
        }
        else if ( op == 4){
            let indice = prompt(persona.carrito.mostrarCarrito() + "\nIngrese el número del producto que desea eliminar al carrito")
            persona.carrito.borrarProducto(indice);
        }
        else if(op == 5){
            break
        }
        else{
            alert("opcion invalida")
        }
    
    } 
}

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n"
    for (let id in productos) {
        mensaje += `${id}. ${productos[id].nombre} - $${productos[id].precio}\n`
    }
    return mensaje
}