const $burger = document.querySelector('.burger')
const $close = document.querySelector('.close-button')
const $mainNav = document.querySelector('.main-nav')

$burger?.addEventListener('click', () => {
  $mainNav.classList.add('oppened')
})

$close?.addEventListener('click', () => {
  $mainNav.classList.remove('oppened')
})
