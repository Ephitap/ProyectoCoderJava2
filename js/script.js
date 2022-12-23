class Pintura{

    constructor(id,nombre,color,tipo,precio,stock){
        this.id=id;
        this.nombre=nombre;
        this.color=color;
        this.tipo=tipo;
        this.precio=parseInt(precio);
        this.stock=parseInt(stock);
    }

    asignarID(array){
        this.id=array.length;
    }

}

const pinturas = [
    new Pintura('1','PoxWalker','verde oscuro','Capa',5000,50),
    new Pintura('2','Stormfiend','celeste oscuro','Sombreado',8000,150),
    new Pintura('3','Berseker Bloodshade','blanco oseo','base',2000,100),
    new Pintura('4','Slanesh aroma','Magenta','base',7000,300),
    new Pintura('5','Black Legion','Negro claro','Seco',2000,100)
]


let continuar = true;


while (continuar) {
    let ingreso = prompt('Ingresa los datos de las pinturas,id,nombre de la pintura,descripcion del color,tipo de pintura,precio y stock, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');

    const pintura = new Pintura(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);
    pinturas.push(pintura);
    pintura.asignarID(pinturas);
}
let criterio = prompt('Elegí el criterio deseado:\n1 - nombre (A a Z) \n2 - nombre (Z a A)\n3 - ID(orden numerico) \n4 - Precio(Menor a mayor) \n5 - Precio(Mayor a menor) ');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
            return nombreAscendente;

        case '2':
            return arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.titulo));
        case '3':
            return arrayOrdenado.sort((a,b)=>a.id-b.id);
        case '4':
            return arrayOrdenado.sort((a, b) => a.precio - b.precio);

        case '5':
                return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        default:
            alert('No es un criterio válido');
            break;
    }
}
function crearStringResultado(array){
    let info=''
    
    array.forEach(elemento => {
        info+='ID: '+elemento.id+'\nNombre: '+elemento.nombre+ '\ncolor: ' + elemento.color + '\ntipo: ' + elemento.tipo + '\nprecio: ' + elemento.precio + '\nstock: ' + elemento.stock + ' \n\n'
        
    }); 
    
    return info;
    
    }

    alert(JSON.stringify(ordenar(criterio,pinturas)));