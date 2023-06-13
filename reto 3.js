/*3. Birds in migration
- You are watching birds migrate in the country, taking notes on the different types of birds you encounter by setting their ID on an array. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.
    - Input: ```arr[4,4,2,2,3]``` 
        - Constrints: 2 < arr <= 2x10^5, where ```n``` inside the array is 0 < n <= 5*/
console.log("Aves en migración")
function mayorTipoDeAve(arr) {
  if (arr.length < 2 || arr.length > 200000) {
    console.log("El tamaño del arreglo excede al tamaño pensado.");
    return;
  }

  let contador = {};

  for (let i = 0; i < arr.length; i++) {
    let tipo = arr[i];
    if (tipo < 0 || tipo > 5) {
      console.log("Este tipo de ave aun no ha sido clasificada.");
      return;
    }
    if (contador[tipo]) {
      contador[tipo]++;
    } else {
      contador[tipo] = 1;
    }
  }

  let mayorAparicion = 0;
  for (let tipo in contador) {
    if (contador[tipo] > mayorAparicion) {
      mayorAparicion = contador[tipo];
    }
  }

  let aveConMenorId = Infinity;
  for (let tipo in contador) {
    if (contador[tipo] === mayorAparicion && tipo < aveConMenorId) {
      aveConMenorId = tipo;
    }
  }

  return `El tipo de ave con mayor avistamiento es: ${aveConMenorId}`;
}

let array = [4, 3, 1, 2, 3, 2, 5, 3, 4, 1, 4, 1, 5, 4, 3, 1];
console.log(mayorTipoDeAve(array));
