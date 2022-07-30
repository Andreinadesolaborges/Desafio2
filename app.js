//Variables
let monedasJugador = 2000;
let subTotal;
let seleccion;
const precioBaston = 950;
const precioEspada = 500;
const precioHacha = 550;
let comprar = true;

function iniciarApp ()
{   
    do {

        alert ("Tienda de objetos - Elige los objetos que quieres comprar:");

        let comprar=false;

        while (comprar!= true) {
            seleccion = prompt("Baston ("+ precioBaston + ") / Espada ("+ precioEspada +") / Hacha ("+ precioHacha +").");
            console.log (seleccion);
            seleccion = seleccion.toLowerCase();
            console.log (seleccion);

            if (seleccion == "baston" || seleccion == "espada" || seleccion == "hacha")
            {
                calcularSubTotal();
                comprarItem ();
            }
            else {
                alert ("No es un item válido...");
            }
            
            comprar = prompt ("Escribe 'si' si quieres seguir comprando en la tienda.");
            comprar = comprar.toLowerCase();
            if (comprar == "si"){
                comprar = false;
            }
            else {
                comprar = true;
            }
        }
    } while (comprar != true)
}

function calcularSubTotal(){

    if (seleccion == "baston"){
        subTotal = precioBaston;
        alert ("Decides comprar el bastón.");
    }
    else if (seleccion == "espada"){
        subTotal = precioEspada;
        alert ("Decides comprar la espada.");
    }
    else if (seleccion == "hacha"){
        subTotal = precioHacha;
        alert ("Decides comprar la hacha.");
    }
    else {
        subTotal = 0;
        alert ("No estás comprando nada.");
    }

}

function comprarItem ()
{
    if (subTotal <= monedasJugador)
    {
        monedasJugador = monedasJugador - subTotal;
        alert ("Has comprado el item. Tienes " + monedasJugador + " monedas disponibles.");
    }
    else if (subTotal > monedasJugador) {
        alert ("No tienes suficientes monedas para comprar este item.");
    } 
    else {
        alert ("error.");
    }
}

