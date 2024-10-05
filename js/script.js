let min = 0;
let max = 20;
let reservas = Math.floor(Math.random() * (max - min + 1)) + min;
let mesasDisp = 20 - reservas;
let verMenu = "";
let pedidos = [];
let total = 0;

const menuItems = {
    1: { nombre: "Bife de chorizo", precio: 12000 },
    2: { nombre: "Rabas", precio: 9000 },
    3: { nombre: "Mollejas", precio: 8000 },
    4: { nombre: "Entrañas", precio: 13000 },
    5: { nombre: "Matambre de cerdo", precio: 11000 },
    6: { nombre: "Agua", precio: 2000 },
    7: { nombre: "Cerveza", precio: 3000 },
    8: { nombre: "Vino", precio: 4000 }
};

const menu = "1-Bife de chorizo --> $12000\n2-Rabas --> $9000\n3-Mollejas --> $8000\n4-Entrañas --> $13000\n5-Matambre de cerdo --> $11000";
const bebidas = "6-Agua --> $2000\n7-Cerveza --> $3000\n8-Vino --> $4000";

alert("¡Bienvenidos a nuestro restaurante !");
let reserva = prompt("¿Cómo anda, todo en orden? ¿Contaba con reserva? Responda con 'si' o 'no'").toLowerCase();

if (reserva === "si" || (reserva === "no" && mesasDisp >= 1)) {
    alert("Por aquí, esta va a ser su mesa. Aún contamos con " + mesasDisp + " mesas disponibles.\nLes dejo la carta con los platos, vuelvo en 5 minutos.");

    while (verMenu !== "fin") {
        alert(menu + "\n" + bebidas);
        verMenu = prompt("Ingrese el número de su plato o bebida, escriba 'fin' si ya no desea ordenar más.").toLowerCase();
        
        if (verMenu === "fin") {
            break;  
        }
        
        let seleccion = parseInt(verMenu);


        if (menuItems[seleccion]) {
            pedidos.push(menuItems[seleccion].nombre);
            total += menuItems[seleccion].precio;
            alert("Has añadido: " + menuItems[seleccion].nombre);
        } else {
            alert("Por favor, ingrese un número válido de plato o bebida, o 'fin' para terminar.");
        }
    }

    alert("Tu pedido es: " + pedidos.join(", "));
    alert("El monto total a cobrar es: $" + total);

} else if (reserva === "no") {
    alert("Sepa disculpar, el restaurante se encuentra lleno, no tenemos mesas disponibles.");
}
