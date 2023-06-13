/*2. Book
- You are reading a book and want to get to a certain page number inside that book since you forgot where you left it, count how many page turns you have to do untill you reach the desired page.
    - Take note that opening the book doesn't count as a page turn, and when opened, the right side of the page is always page 1.
    - When flipped, page 2 and 3 are in view, so that's pageTurns = 1, when flipped again pages 4 and 5 are in view, so that's pageTurns = 2
    - Every page, except first and last are always printed on both sides.
    2. The book is n pages long and you want to turn to page p
    3. Input: 
        - n: number of pages in book
        - p: page you want to get to
        - Constraints: 1 <= n <= 10^5, 1 <= p <= n
    4. Output: number of page turns*/
console.log("LIBRO");
//Forma 1 sin restricción
console.log("");
console.log("Forma sin restricción");
function pasosDePagina(n, p) {
    if (p <= Math.floor(n / 2)) {
      return Math.floor(p / 2);
    } else {
      return Math.floor(n / 2) - Math.floor(p / 2);
    }
}

console.log("Tendra que pasar un total de " + pasosDePagina(1090, 487) + " paginas");
  
console.log("");


// Forma 1 con restricción
console.log("Forma con restricción");
function contarPasosDePagina(n, p) {
  if (n < 1 || n > 10 ** 5 || p < 1 || p > n) {
    console.log("Los valores agregados son invalidos, por favor, limite a 100000 o menos.");
    return;
  }

  if (p <= Math.floor(n / 2)) {
    return Math.floor(p / 2);
  } else {
    return Math.floor(n / 2) - Math.floor(p / 2);
  }
}

let pasos = contarPasosDePagina(1000440, 57569);
if (pasos !== undefined) {
  console.log("Tendra que pasar un total de " + pasos + " paginas");
}

console.log("");


//Forma 2 sin utilizacion de bibliotecas Math
console.log("Sin utilizar bibloteca Math");

function paginasQueDeberaPasar(n, p) {
  if (n < 1 || n > 10 ** 5 || p < 1 || p > n) {
    console.log("Los valores agregados son inválidos, por favor, limite a 100000 o menos.");
    return;
  }

  let cambioDePaginas = 0;
  if (p <= (n + 1) / 2) {
    if (p % 2 === 0) {
      cambioDePaginas = p / 2;
    } else {
      cambioDePaginas = (p - 1) / 2;
    }
  } else {
    if (n % 2 === 0) {
      cambioDePaginas = (n - p + 1) / 2;
    } else {
      cambioDePaginas = (n - p) / 2;
    }
  }
  console.log("Tendrá que pasar un total de " + cambioDePaginas + " páginas");
}

paginasQueDeberaPasar(1014, 504);

console.log("");


