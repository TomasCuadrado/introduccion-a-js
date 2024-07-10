//D1
function d1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// d1(); 

//D2
function d2() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
//d2()

//D3
function d3() {
    for (let i = 0; i <= 10; i++) {
        console.log(`7*${i} = ${7 * i}`);
    }
}
//d3()

//D4
function d4() {
    for (let i = 0; i <= 10; i++) {
        console.log(`9*${i} = ${9 * i}`);
    }
}
//d4();

function d5() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        console.log(suma)
    }

}
//d5();

//D6
function d6(nro = 10) {
    let factorial = nro;
    for (let i = nro - 1; i >= 1; i--) {
        console.log(`${factorial} * ${i}`);
        factorial = factorial * i;
    }
    console.log(factorial);
}
//d6(5);

//D7
function d7() {
    let suma = 0;
    for (let i = 0; i < 30; i++) {
        if (i > 10 && i < 30) {
            //console.log(suma, i);
            suma += i
        }
    }
    console.log(suma);
}
//d7();

//d8
function d8(nro = 30) {
    // Celcius a Fahrenheit 
    // Grados Fahrenheit = (grados centígrados × 9/5) +32
    fahrenheit = (nro * (9 / 5)) + 32;
    console.log(fahrenheit);
}
//d8(1);

//D9
function d9(nro = 100) {
    //fahrenheit a celsius
    //Grados centígrados = (grados Fahrenheit − 32) × 5/9
    celsius = (nro - 32) * (5 / 9);
    console.log(celsius);
}
//d9(144);

//10
function d10(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    let suma = 0;
    array.forEach(element => {
        console.log(element);
        suma += element;
    });
    console.log(`suma total ${suma}`);
}
//d10();

//D11
function d11(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    let promedio = 0;
    let sumador = 0;
    let i = 0;
    for (i; i < array.length; i++) {
        sumador += array[i];
        promedio = sumador / (i + 1);
    }
    console.log(`cuenta final: ${i}`);
    console.log(`suma final: ${sumador}`);
    console.log(`promedio Final: ${promedio}`);
}
//d11();

//D12
function d12(array = [-1, 2, -3, -4, 5, 6, -7, -8, 9, 10]) {
    let arrayPositivo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPositivo.push(array[i]);
        }
    }
    console.log(arrayPositivo);
}
//d12()

//D13
function d13(array = [-1, 0, 2, -3, -4, 5, 6, -7, -8, 9, 10]) {
    let maximo;
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            maximo = array[i];
            console.log(`Nuevo maximo: ${maximo}`);
        } else if (array[i] > maximo) {
            maximo = array[i];
            console.log(`Nuevo maximo: ${maximo}`);
        }
    }
    console.log(`Maximo: ${maximo}`);
}
//d13();

//D14
function d14(cant = 10) {
    let a = 0;
    let b = 1;
    let aux = b;
    console.log(a);
    console.log(b);
    for (let i = 0; i < 10; i++) {
        console.log(c);
        c+=
    }
}
d14();