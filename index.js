// funkcija generira slučajni broj
var y = Math.floor(Math.random() * 10 + 1);
// za testiranje u konzoli
console.log(y)
// brojanje pokušaja
var guess = 1;
// dohvaćanje unosa
document.getElementById("uneseniBroj").onclick = function () {

// postavljanje nove varijable     
    var x = document.getElementById("poljeUnos").value;
// provjera da li je u unos u rasponu 1 - 10
    if (x > 10 || x < 1) {
        alert("Unesite broj između 1 i 10");
    } 
    // provjera da li je odgovor točan
    else if (x == y) {
        alert("Bravo! točno ste pogodili iz " +
            guess + " pokušaja! ");
// učitava iznova stranicu kako bi se generirao novi broj
            document.location.reload();   
    }
// ako odgovor nije točan - provjera da li odgovor veći od generiranog broja
    else if (x > y) {
// povećava broj neuspješnih pokušaja za 1
        guess++;
        alert("Ne baš... zamišljeni broj je manji od vašeg pokušaja.");
    } 
// ako odgovor nije veći (a nije ni točan) onda je manji 
    else {
// povećava broj neuspješnih pokušaja za 1
        guess++;
        alert("Ne baš... zamišljeni broj je veći od vašeg pokušaja.")
    }
}