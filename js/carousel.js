let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');
let images = document.querySelectorAll('.carousel .slide img');
let rightArrow = document.querySelector('.rigth-arrow');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;

function loadSlides() {

    carousel.style.height = '90vh';
    let heightCarousel = carousel.offsetHeight; 

    for (i=0; i < images.length; i++) {
        if (images[i].offsetHeight < heightCarousel) {
            heightCarousel = images[i].offsetHeight;
        }
    }

    carousel.style.height = heightCarousel + 'px';

    for (i=0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
}

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    loadSlides();
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}

function nextSlide() {
    updateArrowsState(1);
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}

function prevSlide() {
    updateArrowsState(-1);
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px';
    }
}

function updateArrowsState(e) {
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }
    if (counter === slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';
    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}

/*Abre el Lightbox*/

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
  };
  
  imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightboxbox);
  });
  
  /*Cierra el Lightbox */
  
  btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  /* Adelanta la imagen*/
  
  const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1) {
      indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
  };
  
  btnAdelanta.addEventListener('click', adelantaImagen);
  
  /*Retrocede la Imagen*/
  
  const retrocederImagen = () => {
    if (indiceImagen === 0) {
      indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
  };
  
  btnRetrocede.addEventListener('click', retrocederImagen);
