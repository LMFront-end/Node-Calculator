const calculator = require('./calculator1.js');

const fs = require('fs');

const operaciones = ['suma', 'resta', 'divison', 'multiplicacion'];

//para preguntar al usuario

const interface = require('readline-sync');

let nombre = interface.question("Escribe tu nombre: ");

console.log(`Hola ${nombre} espero te encuentres muy bien! realiza las operaciones las veces que desees!... si quieres salir solo presiona 5 \n`);

let operacion = "";
let mensaje = "";
let texto = "";

function obtenerOperacion(numero) {
    return operaciones[parseInt(numero) - 1];
}

do {
    operacion = interface.question(`que operacion deseas realizar ${nombre} 
1: suma 
2: restar 
3: division 
4: multiplicacion
5: salir
operacion: `);
    if (operacion == 5) {

    } else {
        let numero1 = interface.question("Primer numero para " + obtenerOperacion(operacion) + " ");
        let numero2 = interface.question("Segundo numero para " + obtenerOperacion(operacion) + " ");

        if (operacion == 1) {
            let resultado = calculator.sumar(numero1, numero2);
            mensaje = "Sro(a) " + nombre + ": El resultado de la suma es " + resultado;
            console.log(mensaje);
            texto += mensaje + "\n";
            //escribirEnArchivo(mensaje);

        } else if (operacion == 2) {
            let resultado = calculator.restar(numero1, numero2);
            mensaje = "Sro(a) " + nombre + ": El resultado de la resta es " + resultado;
            console.log(mensaje);
            texto += mensaje + "\n";
            //escribirEnArchivo(mensaje);

        } else if (operacion == 3) {
            let resultado = calculator.dividir(numero1, numero2);
            mensaje = "Sro(a) " + nombre + ": El resultado de la división es " + resultado;
            console.log(mensaje);
            texto += mensaje + "\n";
            //escribirEnArchivo(mensaje);

        } else if (operacion == 4) {
            let resultado = calculator.multiplicar(numero1, numero2);
            mensaje = "Sro(a) " + nombre + ": El resultado de la multiplicación es " + resultado;
            console.log(mensaje);
            texto += mensaje + "\n";
            //escribirEnArchivo(mensaje);

        } else if (operacion != 5) {
            console.log("ingrese una operacion correcta");
        }
    }

} while (operacion != "5");

escribirEnArchivo(texto);

function escribirEnArchivo(texto) {
    fs.appendFileSync('operacionesLina.txt', "\n" + texto, function(err) {
        if (err) console.log(err);
    });

}