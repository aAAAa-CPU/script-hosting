// creare una funzione a freccia per gestire l'evento scroll
window.onscroll = () => {
  updateHeader();
};

/**
 * Questa funzione aggiorna l'header aggiungendo o rimuovendo
 * la classe "scrolled", che rimpiscolisce la grandezza del
 * titolo.
 */
function updateHeader() {
  // se lo scroll è maggiore di 80 pixel allora aggiungi la classe
  // altrimenti rimuovila
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    document.querySelector(".header").className = "header scrolled";
  } else {
    document.querySelector(".header").className = "header";
  }
}
