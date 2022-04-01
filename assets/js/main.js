/* 
    Parola Palindroma
*/

/* //chiedi all'utente di inserire una parola
let word = prompt("Inserisci una parola");

//crea una funzione per controllare se la parola è palindroma

function palindrome (word) {

    //transformo la parola in array
    let split_word = word.split(``);
    
    //inverto 
    let rev_word = split_word.reverse();

    //transormo l'array in stringa
    let join_word = rev_word.join(``);

    //verifica della parola palindroma
    if (word == join_word){
        console.log(`la parola è palindroma`);
    } else {
        console.log(`la parola non è palindroma`);
    }

}

//utilizzo della funzione palindrome 
palindrome(word); */



/* 
    Pari o Dispari
*/

//chiedere all'utente di scegliere pari o dispari

let user_choice = prompt("pari o dispari?");

//far inserire un numero

let user_num = parseInt(prompt("Scegli un numero da 1 a 5"));

//funzione per generare un numero random cpu

function num_generator(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

let cpu_num = num_generator(1, 5)

//fai la somma dei due numeri
let sum = user_num + cpu_num;
console.log(user_num, cpu_num, sum);

function winner(result) {
    if (result % 2 == 0) {
        console.log("Ha vinto Pari!");
    } else {
        console.log("Ha vinto Dispari!");
    }
}

//Dichiarare il vincitore
winner(sum);