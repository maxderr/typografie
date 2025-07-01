const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('item-list');

// Pas deze waardes aan op basis van je afbeeldingseigenschappen
const itemWidth = 150; // Breedte van elk item
const padding = 10; // Padding tussen items

let scrollAmount = itemWidth + padding; // Totale scrollafstand

prev.addEventListener('click', () => {
    // Scroll naar links
    list.scrollLeft -= scrollAmount;
});

next.addEventListener('click', () => {
    // Scroll naar rechts
    list.scrollLeft += scrollAmount;
});

// Optioneel: Zorg ervoor dat knoppen niet buiten de grenzen kunnen scrollen
function updateButtonVisibility() {
    prev.style.visibility = (list.scrollLeft === 0) ? 'hidden' : 'visible';
    next.style.visibility = (list.scrollLeft + list.clientWidth >= list.scrollWidth) ? 'hidden' : 'visible';
}

// Bij het scrollen de knoppen bijwerken
list.addEventListener('scroll', updateButtonVisibility);

// Initialiseer de zichtbaarheid van de knoppen
updateButtonVisibility();
