let persona = new Usuario()

while(true){//
    let opcion = Number(prompt("1)Crear usuario \n2)ingresar"))
    if(opcion == 1){
        crear_Usuario()
        alert("usuario creado con exito")
    }
    else if(opcion == 2){
        //let validar = ingresar()
        if(ingresar()){
            alert("hola "+ persona.nombre)
            menu()
            
        }
        else{
            alert("usuario o contraseña invalida")
        }
    }
    else{
        alert("opcion incorrecta, vuelva a ingresar")
    }
}




