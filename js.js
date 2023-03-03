
function sobreelboton() {
  document.getElementById("desplegarporfolio").classList.toggle("mostrar");
}


window.onclick = function(event) {
  if (!event.target.matches('.boton')) {
    var dropdowns = document.getElementsByClassName("contenido-desplegable");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mostrar')) {
        openDropdown.classList.remove('mostrar');
      }
    }
  }
}



