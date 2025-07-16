export function menu() {
  $(document).ready(function () {
    const header = document.querySelector('.header-bg')
    const menu = document.querySelector('.menu-mobile')
    const links = document.querySelectorAll('.menu-mobile ul a')
    const menuToggle = document.getElementById('menu-toggle')
    let isMenuOpen = false

    // Ao clicar no botão do menu
    $('#menu-toggle').click(function () {
      $(this).toggleClass('open')

      if (isMenuOpen) {
        menu.style.top = '-100vh'
        header.style.position = 'static'
      } else {
        menu.style.top = '0'
        setTimeout(() => {
          header.style.position = 'fixed'
        }, 800)
      }

      isMenuOpen = !isMenuOpen
    })

    // Ao clicar em qualquer link do menu
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.style.top = '-100vh'
        $('#menu-toggle').removeClass('open')
        header.style.position = 'static'
        isMenuOpen = false
      })
    })
  })
}
