//chiedi all'utente di inserire una parola
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
palindrome(word);

