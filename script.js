  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
  }

  // Fecha o menu ao clicar em qualquer link
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
    });
  });
