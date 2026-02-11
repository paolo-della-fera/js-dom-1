// inizio scrivendomi le variabili per richiamare gli elementi dall'html
const ligthOff = document.getElementById('ligth_off')
const ligthOn = document.getElementById('ligth_on')
const btn = document.getElementById('btn')

// creo una variabile che mi dice lo stato della lampadina
let turnedOn = false;

// aggiungo il click del bottone per accendere e spegnere la luce 
btn.addEventListener('click', function() {
    turnedOn = !turnedOn; 
    // SE clicco il bottone e la lampadina è spenta disattivo l'immagine della lampadina spenta e attivo l'immagine della lampadina accesa 
    if (turnedOn) { 
        ligthOff.style.display = 'none';
        ligthOn.style.display = 'block';
    }
    //ALTRIMENTI eseguo il contrario per spegnerla
    else {
        ligthOff.style.display = 'block';
        ligthOn.style.display = 'none';
    }

    console.log('click btn');
}) 
