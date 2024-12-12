// components/menu.js
class CustomMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear el estilo
    const style = document.createElement('style');
    style.textContent = `
      nav {
        background-color: #333;
        padding: 10px;
        display: flex;
        justify-content: center;
      }

      a {
        color: #fff;
        text-decoration: none;
        margin-right: 15px;
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 4px;
      }

      a:hover {
        text-decoration: underline;
        background-color: #555;
      }

      a.active {
        background-color: #0077cc;
        font-weight: bold;
      }
    `;

    // Crear el contenedor <nav>
    const nav = document.createElement('nav');
    
    // Definir los enlaces del menú
    const links = [
      { href: '#profile', text: 'Perfil' },
      { href: '#table', text: 'Tabla' },
      { href: '#gallery', text: 'Galería' }
    ];

    // Crear los elementos <a> para cada enlace y agregar al <nav>
    links.forEach(linkData => {
      const link = document.createElement('a');
      link.setAttribute('href', linkData.href);
      link.textContent = linkData.text;

      // Agregar evento de clic para cambiar la sección visible
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto de los enlaces

        // Remover la clase 'active' de todos los enlaces
        document.querySelectorAll('a').forEach(item => item.classList.remove('active'));
        
        // Agregar la clase 'active' al enlace clickeado
        link.classList.add('active');

        // Ocultar todas las secciones
        document.querySelectorAll('custom-social-profile, custom-table, custom-gallery').forEach(page => {
          page.style.display = 'none';
        });

        // Mostrar la sección correspondiente
        const targetSection = document.querySelector(link.getAttribute('href'));
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });

      nav.appendChild(link);
    });

    // Agregar el estilo y el menú <nav> al Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(nav);
  }
}

// Definir el Custom Element
customElements.define('custom-menu', CustomMenu);
