// components/socialProfile.js
class SocialProfile extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      .profile {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 8px;
        max-width: 400px;
        margin: auto;
        text-align: center;
      }
      .profile h2 {
        margin-top: 0;
      }
      .profile img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 15px;
      }
      .profile a {
        color: #0077cc;
        text-decoration: none;
      }
      .profile a:hover {
        text-decoration: underline;
      }
      .bio {
        font-style: italic;
        color: #555;
      }
      .social-links {
        margin-top: 15px;
      }
    `;

    // Crea el perfil
    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.innerHTML = `
      <img src="https://i.gyazo.com/a6ec92205f9ac682c58701dc06653fab.jpg" alt="Profile Photo">
      <h2>Jairo Eduardo Pogo Rengel</h2>
      <p class="bio">Estudiante de la Universidad de la Fuerzas Armadas "ESPE" y creativo.</p>
      <p>Profesión: Ingeniero en TIC's</p>
      <p>Ubicación: Ciudad de Quito, Ecuador</p>
    `;

    // Añadir estilo y contenido al Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(profile);
  }
}

// Definir el custom element
customElements.define('custom-social-profile', SocialProfile);
