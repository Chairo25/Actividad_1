# Mi Aplicación Web

## Descripción de la Actividad
Este proyecto consiste en una aplicación web modular desarrollada utilizando Custom Elements de HTML, incluyendo características como:

- Shadow DOM para encapsulamiento de estilos y estructura.
- Uso de templates y slots para contenido dinámico.
- Llamadas a APIs externas para cargar datos.

La aplicación tiene los siguientes componentes:

1. **Header:** Encabezado de la página.
2. **Footer:** Pie de página.
3. **Menu:** Menú de navegación principal.
4. **Main:** Contenedor principal para las diferentes páginas.
5. **SocialProfile:** Página de perfil de red social.
6. **CustomTable:** Tabla personalizada que carga datos desde una API JSON.
7. **Gallery:** Galería de imágenes personalizada.

## Estructura del Proyecto

```
/
├── index.html
├── components/
│   ├── header.js
│   ├── footer.js
│   ├── menu.js
│   ├── main.js
│   ├── socialProfile.js
│   ├── customTable.js
│   └── gallery.js
└── README.md
```

## Instalación y Uso

1. Clona este repositorio o descarga el proyecto.
2. Asegúrate de tener un servidor local (como XAMPP, WAMP o cualquier extensión para servidores estáticos) configurado.
3. Coloca los archivos en la carpeta del servidor.
4. Abre `index.html` en un navegador para visualizar la aplicación.

## Detalles de los Componentes

### Header
- Representa el encabezado de la página.
- Contiene un título estilizado con CSS.

### Footer
- Pie de página con texto centralizado y diseño responsive.

### Menu
- Barra de navegación con enlaces a las diferentes secciones de la página.
- Usa eventos para mostrar u ocultar las secciones según el enlace clicado.

### Main
- Contenedor principal que organiza las secciones de la aplicación mediante slots dinámicos.

### SocialProfile
- Muestra información del perfil del usuario.
- Incluye foto, nombre, bio y ubicación del usuario.

### CustomTable
- Carga datos dinámicos desde una API pública (`https://jsonplaceholder.typicode.com/users`).
- Muestra la información en una tabla estilizada.

### Gallery
- Realiza llamadas a la PokeAPI para cargar imágenes de Pokémon.
- Diseña una galería responsiva con CSS Grid.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura base.
- **CSS3**: Para estilos y diseño responsive.
- **JavaScript ES6**: Para implementar la lógica de los Custom Elements.
- **APIs externas**: JSONPlaceholder y PokeAPI.

## Mejoras Futuras

- Agregar más interactividad a los componentes, como efectos hover avanzados o animaciones.
- Permitir la edición en tiempo real de datos en `CustomTable`.
- Extender la galería para incluir búsquedas personalizadas.

---

Cualquier consulta o sugerencia puede ser enviada al desarrollador a través de este repositorio.
