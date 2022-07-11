// HR - generiranje slučajnog broja
// EN - generating random number
var y = Math.floor(Math.random() * 10 + 1);
// HR - za testiranje u konzoli
// EN - for testing in console
console.log(y)

// HR - brojanje pokušaja
// EN - counting attempts
var guess = 1;
// HR - dohvaćanje unosa
// EN - getting input
document.getElementById("uneseniBroj").onclick = function () {

// HR - postavljanje nove varijable
// EN - setting new variable
    var x = document.getElementById("poljeUnos").value;

// HR - provjera da li je u unos u rasponu 1 - 10
// EN - checking if input is in range 1 - 10
    if (x > 10 || x < 1) {
        alert("Unesite broj između 1 i 10");
    }
// HR - provjera da li je odgovor točan
// EN - checking if answer is correct
    else if (x == y) {
        alert("Bravo! točno ste pogodili iz " +
            guess + " pokušaja! ");
// HR - učitava iznova stranicu kako bi se generirao novi broj
// EN - reloading page to generate new number
            document.location.reload();
    }
// HR - ako odgovor nije točan - provjera da li je odgovor veći od generiranog broja
// EN - if answer is not correct - checking if answer is bigger than generated number
    else if (x > y) {
// HR - povećava broj neuspješnih pokušaja za 1
// EN - increasing unsuccessful attempts by 1
        guess++;
        alert("Ne baš... zamišljeni broj je manji od vašeg pokušaja.");
    }
// HR - ako odgovor nije veći od generiranog broja (a nije ni točan) onda je manji
// EN - if answer is not bigger than generated number (and not correct) then it is smaller
    else {
// HR - povećava broj neuspješnih pokušaja za 1
// EN - increasing unsuccessful attempts by 1
        guess++;
        alert("Ne baš... zamišljeni broj je veći od vašeg pokušaja.");
    }
}