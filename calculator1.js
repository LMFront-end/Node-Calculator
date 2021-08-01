const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2)
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2)
}

//exportar los archivos al doc app1.js

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;