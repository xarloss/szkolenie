/*
    Pod zmienną array dostaniesz tablicę stringów(zawsze)
    twoim zadaniem będzie usunięcie z niej stringów które będą znajdować się w tablicy removeThis

    Przykładowe dane
    array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    removeThis = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

    Wynikiem funkcji powinna być tablica
    ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

    W przypadku w którym array pokrywa się w całości z removeThis powinna zostać zwrócona pusta tablica
*/
function arrayFilter(array = [], removeThis) {

    return null
}


/*
    Nie chcaiło mi się pisać obsługi wyników z testów
    więc jak chcesz zobaczyć co zwraca twoja funkcja to 
    odkomentuj ten kod niżej i podstaw swoje dane.
    
    Aby odpalić ten podgląd wpisz tylko 
    node zadanie1.js
    lub
    npm run zad1
*/

/*
    const array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    const removeThis = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    console.log(arrayFilter(array, removeThis))
*/


module.exports = arrayFilter