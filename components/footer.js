// components/footer.js
class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 15px 10px;
        font-family: 'Arial', sans-serif;
        border-top: 2px solid #444;
      }

      /* Responsividad para pantallas pequeñas */
      @media (max-width: 600px) {
        footer {
          font-size: 14px;
          padding: 10px 5px;
        }
      }
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = "&copy; 2024 Mi Aplicación Web. Todos los derechos reservados.";

    shadow.appendChild(style);
    shadow.appendChild(footer);
  }
}

customElements.define('custom-footer', CustomFooter);
