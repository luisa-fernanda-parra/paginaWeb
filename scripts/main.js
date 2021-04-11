const boton1 = document.querySelector(".boton");
var pagina = document.body;

boton1.addEventListener("click", function () {
  if (pagina.style.backgroundImage == "none") {
    pagina.style.backgroundImage = "url(images/corazones.png)";
    pagina.style.backgroundSize = "30% auto";
  } else {
    pagina.style.backgroundImage = "none";
  }
});
