export function menu() {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-bg')
    const headerContainer = document.querySelector('.header')
    const menu = document.querySelector('.menu-mobile')
    const links = document.querySelectorAll('.menu-mobile ul a')
    const menuToggle = document.getElementById('menu-toggle')
    let isMenuOpen = false;

    const openMenu = () => {
      menu.style.top = '0'
      headerContainer.style.boxShadow = 'none'
      setTimeout(() => {
        header.style.position = 'absolute'
        header.style.top = '0'
      }, 300);
      menuToggle.classList.add('open')
      isMenuOpen = true
    }
  
    const closeMenu = () => {
      menu.style.top = '-100vh'
      header.style.position = 'static'
      headerContainer.style.boxShadow = 'var(--shadow)'
      menuToggle.classList.remove('open')
      isMenuOpen = false
    }

    menuToggle.addEventListener('click', () => {
      isMenuOpen ? closeMenu() : openMenu()
    })

    links.forEach(link => {
      link.addEventListener('click', closeMenu)
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu()
    })
  })
}