//Variables
let monedasJugador = 2000;
let subTotal;
let seleccion;
let precioBaston = 950;
let precioEspada = 500;
let precioHacha = 550;
let salir;
let ganador = false;
let porcentaje = 30;
let descuentoAplicado = porcentaje / 100;
let primeraRonda = true;


function iniciarApp ()
{   
    do {
        alert ("Tienda de objetos - Monedas del jugador: " + monedasJugador + " - Elige los objetos que quieres comprar:");
        seleccion = prompt("Baston ("+ precioBaston + ") / Espada ("+ precioEspada +") / Hacha ("+ precioHacha +").");
        
      
        if (seleccion == null){
            return; 
        }

        seleccion = seleccion.toLowerCase();

        if (seleccion == "baston" || seleccion == "espada" || seleccion == "hacha")
        {
            calcularSubTotal();
            salirItem ();
         
            if (primeraRonda == true)
            {
                calculoAleatorio ();
            }
            if (ganador == true)
            {
                alert ("Te has ganado un " + porcentaje +"% de descuento.");
                eventoDescuento ();
                ganador = false;
            }
            primeraRonda = false;
        }
        else {
            alert ("No es un item válido...");
        }
        
        salir = prompt ("Escribe 'si' si quieres seguir comprando en la tienda.");
        

        if (salir == null){
            return; 
        }
        
        salir = salir.toLowerCase();

        if (salir == "si"){
            salir = false; 
        }
        else {
            salir = true;
            alert ("¡Gracias por tu compra!");
        }       
    } while (salir != true)
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

function salirItem ()
{
    if (subTotal <= monedasJugador)
    {
        monedasJugador = monedasJugador - subTotal;
        alert ("Has comprado el item. Tienes " + monedasJugador + " monedas disponibles.");
    }
    else if (subTotal > monedasJugador) {
        alert ("No tienes suficientes monedas para salir este item.");
    } 
    else {
        alert ("error.");
    }
}

function calculoAleatorio ()
{
    const numeroRandom = Math.floor(Math.random() * 2 + 1);
    console.log (numeroRandom);
    if (numeroRandom == 1)
    {
        ganador = true;
    }
    else 
    {
        ganador = false;
    }
}

function eventoDescuento ()
{
    precioBaston = precioBaston - precioBaston * descuentoAplicado;
    precioEspada = precioEspada - precioEspada * descuentoAplicado;
    precioHacha = precioHacha - precioHacha * descuentoAplicado;
}
