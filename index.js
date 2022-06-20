// random value generated
var y = Math.floor(Math.random() * 10 + 1);

// brojanje pokušaja
var guess = 1;

document.getElementById("uneseniBroj").onclick = function() {

    // unos pretpostavljenog (pogađanog) broja     
    var x = document.getElementById("poljeUnos").value;

    if (x == y) {
        alert("Bravo! točno ste pogodili iz " +
            guess + " pokušaja! ");
    } else if (x > y)
    /* ako je uneseni broj veći od generiranog */
    {
        guess++;
        alert("Ne baš... zamišljeni broj je manji od vašeg pokušaja.");
        /* ako je uneseni broj manji od generiranog */
    } else {
        guess++;
        alert("Ne baš... zamišljeni broj je veći od vašeg pokušaja.")
    }
}