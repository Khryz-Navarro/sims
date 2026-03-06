const $collapseEl = document.querySelector('#navbar-collapse-basic')
const $scrollSpyEl = document.querySelector('[data-hs-scrollspy="#scrollspy-1"]')

$scrollSpyEl.addEventListener('scroll.hs.scrollspy', () => {
  if (window.outerWidth <= 639 && $collapseEl.classList.contains('open')) {
    HSCollapse.hide($collapseEl)
  }
})