// components/gallery.js
class Gallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const images = data.results.map(pokemon => pokemon.url);

    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    
    const style = document.createElement('style');
    style.textContent = `
      .gallery {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
      }

      .gallery img {
        width: 100%;
        height: auto;
      }
    `;
    
    images.forEach(url => {
      fetch(url)
        .then(response => response.json())
        .then(pokemon => {
          const img = document.createElement('img');
          img.src = pokemon.sprites.front_default;
          gallery.appendChild(img);
        });
    });

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(gallery);
  }
}

customElements.define('custom-gallery', Gallery);
