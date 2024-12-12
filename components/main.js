// components/main.js
class CustomMain extends HTMLElement {
  connectedCallback() {
    // Crear el Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear el estilo
    const style = document.createElement('style');
    style.textContent = `
      main {
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
      }
      h2 {
        text-align: center;
        color: #333;
      }
      p {
        text-align: center;
        color: #666;
      }
    `;

    // Crear el contenedor main
    const main = document.createElement('main');
    const title = document.createElement('h2');
    title.textContent = 'Bienvenido a mi Aplicación Web';

    // Crear el slot para contenido dinámico
    const slot = document.createElement('slot');
    
    // Agregar el título y el slot al contenedor main
    main.appendChild(title);
    main.appendChild(slot);

    // Agregar el estilo y el contenedor main al Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(main);

    // Detectar cambios en el contenido del slot
    slot.addEventListener('slotchange', () => {
      // Si el slot está vacío, mostrar un mensaje por defecto
      const assignedNodes = slot.assignedNodes();
      if (assignedNodes.length === 0) {
        const defaultMessage = document.createElement('p');
        defaultMessage.textContent = 'No se ha asignado contenido al slot.';
        main.appendChild(defaultMessage);
      } else {
        // Eliminar el mensaje por defecto si se asigna contenido al slot
        const existingMessage = main.querySelector('p');
        if (existingMessage) {
          existingMessage.remove();
        }
      }
    });
  }
}

customElements.define('custom-main', CustomMain);
