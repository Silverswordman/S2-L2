/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numbers = [2, 5];
console.log(numbers);

if (numbers[0] < numbers[1]) {
  console.log(numbers[1] + " è il più grande");
} else {
  console.log(numbers[0] + "è il più piccolo");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5. */

console.log(numbers[0]);

if (numbers[0] !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let NumberDivisible = 50;

if (NumberDivisible % 5 === 0) {
  console.log("E' divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const numbers2 = [8, 16];
console.log(numbers2);

if (
  numbers2[0] === 8 ||
  numbers2[0] + numbers2[1] ||
  numbers2[0] - numbers2[1] ||
  numbers2[1] - numbers2[0]
) {
  console.log(
    "Uno dei numeri equivale ad 8 oppure la loro addizione/sottrazione equivale a 8"
  );
} else {
  console.log(
    "Uno dei numeri NON equivale ad 8 oppure la loro addizione/sottrazione NON equivale a 8"
  );
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 30;
// console.log(totalShoppingCart + " è il tuo totale senza spedizioni");

// let Shipping = totalShoppingCart <= 50 ? 10 : 0;
// console.log(
//   totalShoppingCart + Shipping + " è il tuo totale con le spedizioni"
// );

// totalShoppingCart = 60;
// console.log(totalShoppingCart);
// Shipping = totalShoppingCart <= 50 ? 10 : 0;

// console.log(
//   totalShoppingCart + Shipping + " è il tuo totale con le spedizioni"
// );

let totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  console.log("Il tuo totale è " + totalShoppingCart);
} else {
  console.log("il tuo totale è ", totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  
*/




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let Variabile = "lol";
if (typeof Variabile !== "number") {
  console.log("La variabile non è un numero");
} else {
  console.log("La variabile è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const NumberOdd = 35;
console.log(NumberOdd);
if (NumberOdd % 2 === 0) {
  console.log("è un numero pari");
} else {
  console.log("è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

val = 2;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
// me.skills.pop();  Salta l ultimo elemento

me.skills.splice(2, 1); // parto dal 3 elemento tolgo un elemento
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let emptyNumbers;
console.log(emptyNumbers); //undefined
emptyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(emptyNumbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
// emptyNumbers.pop(10);
// console.log(emptyNumbers);
// emptyNumbers.push(100);
// console.log(emptyNumbers);

emptyNumbers[emptyNumbers.lenght - 1] = 100;
console.log(emptyNumbers);
