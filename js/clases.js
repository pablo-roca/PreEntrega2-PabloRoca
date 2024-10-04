class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Usuario{
    constructor(nombre, con){
        this.nombre = nombre;
        this.con = con;
        this.carrito = new Carrito();
    }
}
class Carrito {
    constructor() {
        this.items = [];
    }
    agregarProducto(id) {
        if (productos[id]) {
            this.items.push(productos[id]);
            alert(`Agregado al carrito: ${productos[id].nombre}`);
        } else {
            alert("Producto no válido.");
        }
    }

    mostrarCarrito() {
        if (this.items.length === 0) {
            return "El carrito está vacío.";
        }
        let mensaje = "Carrito de compras:\n";
        this.items.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        });
        mensaje += `Total: $${this.calcularTotal()}`;
        return mensaje;
    }

    vaciarCarro(){
        this.items = []
    }

    borrarProducto(indice) {
        if (indice > 0 && indice <= this.items.length) {
            let productoBorrado = this.items.splice(indice - 1, 1);
            alert(`Producto borrado: ${productoBorrado[0].nombre}`);
        } else {
            alert("Índice no válido.");
        }
    }

    calcularTotal() {
        return this.items.reduce((total, producto) => total + producto.precio, 0);
    }
}

let productos = []
productos.push(new Producto("zapatillas adidas neo", 20000))
productos.push(new Producto("zapatillas adidas budBunny", 35000))
productos.push(new Producto("zapatillas nike", 28000))
productos.push(new Producto("zapatillas fila", 18000))
productos.push(new Producto("zapatillas salomon", 40000))
productos.push(new Producto("zapatillas puma", 23000))