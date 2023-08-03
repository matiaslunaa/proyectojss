class Producto{
    constructor(id,nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    aumentarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }

    descripcion(){
        return  "Zapatilla: " + this.id+
                "\nModelo: " + this.nombre+
                "\nPrecio: " + this.precio
    }

    descripcionDeCompra(){
        return  "Zapatilla: " + this.nombre+
                "\nPrecio: " + this.precio+
                "\nCantidad: "+ this.cantidad
    }
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    buscarProductoPorID(id){
        return this.listaProductos.find(producto => producto.id == id)
    }

    mostrarProductos(){
        let listaEnTexto = ""
        this.listaProductos.forEach( producto => {
            listaEnTexto = listaEnTexto + producto.descripcion() + "\n----------------------------------------------------------------------------\n"
        })
        alert(listaEnTexto)
    }
}
class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto,cantidad){
        let existe = this.listaCarrito.some( el => el.id == producto.id)
        if(existe){
            producto.aumentarCantidad(cantidad)
        }else{
            producto.aumentarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }
    }

    mostrarProductos(){
        let listaEnTexto = "Tu compra:\n"
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra() + "\n----------------------------------------------------------------------------\n"
        })
        alert(listaEnTexto)
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad ,0)
    }
}

const CP = new ProductoController()
const CARRITO = new Carrito()

CP.agregar(new Producto(1,"Nike Air Force Blancas", 65000, 0))
CP.agregar(new Producto(2,"Nike Air Max SYSTEM", 54000, 0))
CP.agregar(new Producto(3,"Nike Jordan Max Aura 4", 72000, 0))
CP.agregar(new Producto(4,"Nike Court Vision Low Next Nature", 35000, 0))
CP.agregar(new Producto(5,"Nike Air Max Penny", 96000, 0))
CP.agregar(new Producto(6,"Nike Zoom Fly 4", 89000, 0))

let rta

do{
    CP.mostrarProductos()
    let opcion = Number(prompt("Ingresa la opción que desea comprar"))
    let producto = CP.buscarProductoPorID(opcion)
    let cantidad = Number(prompt("¿Cuántos pares de zapatilla desea comprar?"))
    CARRITO.agregar(producto,cantidad)
    alert("Su zapatilla se agrego al carrito: ")
    CARRITO.mostrarProductos()

    rta = prompt("Ingrese 'SALIR' para finalizar la compra").toUpperCase()
}while(rta != "SALIR")

alert("Total a pagar: "+ CARRITO.calcularTotal())