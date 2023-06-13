var images = ["fotos/Frente da pousada.jpeg", "fotos/frente da pousada2 (1).jpeg", "fotos/frente da pousada2 (2).jpeg", "fotos/quanrto (2).jpeg", "fotos/quanrto (5).jpeg", "fotos/quanrto (6).jpeg", "fotos/quarot.jpeg", "fotos/quanrto (4).jpeg", "fotos/quanrto (1).jpeg", "fotos/pano quarto.jpeg", "fotos/banheiro (1).jpeg", "fotos/banheiro (2).jpeg", "fotos/banheiro (3).jpeg", "fotos/fundo (1).jpeg", "fotos/quanrto (3).jpeg", "fotos/fundo (2).jpeg", "fotos/fundo (3).jpeg", "fotos/area verde (3).jpeg", "fotos/area verde (2).jpeg", "fotos/area verde (1).jpeg"]; // Adicione mais imagens se necessário
var currentIndex = 0;

showImage(currentIndex);

function showImage(index) {
  currentIndex = index;
  var mainImage = document.getElementById("main-image");
  mainImage.src = images[index];

  var thumbnails = document.getElementsByClassName("thumbnail");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  thumbnails[index].classList.add("active");
}

function changeImage(n) {
  var newIndex = currentIndex + n;

  if (newIndex < 0) {
    newIndex = images.length - 1;
  } else if (newIndex >= images.length) {
    newIndex = 0;
  }

  showImage(newIndex);
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // Tecla de seta para esquerda
      changeImage(-1);
    } else if (event.keyCode === 39) { // Tecla de seta para direita
        changeImage(1);
      }
    });