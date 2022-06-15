// Lav variablen "btn", der henviser til ".toggle-btn"
// Lav variablen "menu", der henviser til ".main-menu"
const btn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu');
// Lav funktionen "toggleMenu()" med følgende funktionalitet

function toggleMenu() {
  menu.classList.toggle('shown');

  let menuShown = menu.classList.contains('shown');

  // a) toggle klassen "shown" på menu vha. classList.toggle

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "x", hvis menuShown er "true"
    btn.textContent = 'x';
  } else {
    console.log(menuShown); // se i konsollen
    btn.textContent = '=';
    // sæt btn.textContent til "=", hvis menuShown er "false"
  }
  // "toggleMenu()" slutter her
}

btn.addEventListener('click', toggleMenu);
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
