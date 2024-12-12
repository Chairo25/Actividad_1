// components/customTable.js
class CustomTable extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #f4f4f4;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
            <th>Compañía</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    `;

    this.loadData();
  }

  async loadData() {
    // Obtener los datos de la API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Obtener el cuerpo de la tabla
    const tbody = this.shadowRoot.querySelector('#table-body');

    // Iterar sobre los datos de los usuarios
    data.forEach(user => {
      const row = document.createElement('tr');
      
      // Crear celdas para cada uno de los campos de la API
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
        <td>${user.phone}</td>
        <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
        <td>${user.company.name}</td>
      `;
      
      // Agregar la fila a la tabla
      tbody.appendChild(row);
    });
  }
}

customElements.define('custom-table', CustomTable);
