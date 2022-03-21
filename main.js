// Abre e fecha o menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//esconder itens do menu ao click

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
// mudar o header da pagina quando der scroll
function changeHeaderWhenScroll() {
  const reader = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (this.window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

//testmonials slider or swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
/** Scroll reveal**/ // mostra elementos ao dar scroll
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollreveal.reveal(
  `
#home .image,#home .text,
#about .image,#about .text,
#services .header,
#services .card,
#testimonials .header,
#testimonials .testimonials,
#contact .text,
#contact .links,
footer .brand,
footer .social
`,
  { interval: 100 }
)
// botao para voltar para o topo
function backToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (this.window.scrollY >= 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
/* ---when scroll---- */
window.addEventListener('scroll', function () {
  backToTopButton()
  changeHeaderWhenScroll()
})
