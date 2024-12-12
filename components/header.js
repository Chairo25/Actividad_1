// components/header.js
class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: #fff;
        background-color: #333;
        padding: 20px;
        margin: 0;
        font-family: 'Arial', sans-serif;
        text-align: center;
      }

      /* Responsividad */
      @media (max-width: 600px) {
        h1 {
          font-size: 18px;
          padding: 15px;
        }
      }
    `;

    const header = document.createElement('h1');
    header.textContent = "Aplicación Web Utilizando API Rest";

    shadow.appendChild(style);
    shadow.appendChild(header);
  }
}

customElements.define('custom-header', CustomHeader);
