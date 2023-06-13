/*1. Staircase
- Write a function that prints a staircase according to the specs bellow
- Input: n Where 0 < n <= 100
- Output: A staircase of any special symbol (#, @, *, &, !, etc) right aligned composed of height n and width n*/

console.log("ESCALERA");

//Forma 1
function imprimirEscalera(n, simbolo) {
  for (let i = 1; i <= n; i++) {
    let linea = ''; 

    for (let j = 1; j <= n - i; j++) {
      linea += ' ';
    }
    for (let k = 1; k <= i; k++) {
      linea += simbolo;
    }

    console.log(linea);
  }
}

imprimirEscalera(10, "@");

console.log("");



//Forma 2 con restriccion
function imprimirEscalera(n, simbolo) {
  if (n <= 0 || n > 100) {
    console.log("El valor asiganado no debe sobrepasar 100.");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let espacios = '';
    let escaleras = '';

    for (let j = 1; j <= n - i; j++) {
      espacios += ' ';
    }

    for (let k = 1; k <= i; k++) {
      escaleras += simbolo;
    }

    console.log(espacios + escaleras);
  }
}

imprimirEscalera(10, "*");

console.log("");



//Forma 3
function escalera(n, simbolo) {
  if (n <= 0 || n > 100) {
    console.log("El valor que agregue no debe sobrepasar el número 100.");
    return;
  }

  for (let i = 1; i <= n; i++) {
    const espacios = " ".repeat(n - i);
    const escalones = simbolo.repeat(i);

    console.log(espacios + escalones);
  }
}

escalera(10, "#");


console.log("");