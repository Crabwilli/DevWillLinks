function toggleMode() {
    const html = document.documentElement

//    if( html.classList.contains('light')) {
//        html.classList.remove('light')
//    } else {
//       html.classList.add('light')
//    }
    html.classList.toggle('light')


// Pegar A tag img:
// QuerySelector: Função de pesquisa pelo seletor.
    const img = document.querySelector("#profile img")

// Se tiver light mode, adicionar a imagem light.
    if (html.classList.contains("light")) {

// Sebstituir a imagem:
// setAttribute: Selecionar o atributo que quer alterar.
        img.setAttribute('src', "./assets/assets/avatar-moon-light.png")
    } else {

// se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/assets/avatar-light02.png")
    }

}


let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const translateValue = -currentSlide * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Adiciona um temporizador para avançar automaticamente os slides a cada 5 segundos (5000 milissegundos)
slideInterval = setInterval(nextSlide, 1500);

// Pára o temporizador quando o mouse estiver sobre o carrossel
document.querySelector('.carousel-container').addEventListener('mouseover', () => clearInterval(slideInterval));

// Reinicia o temporizador quando o mouse sair do carrossel
document.querySelector('.carousel-container').addEventListener('mouseout', () => slideInterval = setInterval(nextSlide, 5000));

