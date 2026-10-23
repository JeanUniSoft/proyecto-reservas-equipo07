// RQ-01 registrar, RQ-02 modificar, RQ-03 consultar clientes
const form = document.getElementById('form-cliente');
const tabla = document.getElementById('tabla-clientes');
const buscar = document.getElementById('buscar');

function listar(filtro = '') {
  const texto = filtro.toLowerCase();
  const clientes = DB.get('clientes').filter(c =>
    c.nombre.toLowerCase().includes(texto) || c.dni.includes(texto));
  tabla.innerHTML = clientes.map(c => `
    <tr>
      <td>${c.id}</td><td>${c.nombre}</td><td>${c.dni}</td><td>${c.telefono}</td>
      <td><button onclick="editar(${c.id})">Editar</button></td>
    </tr>`).join('');
}

function editar(id) {
  const c = DB.get('clientes').find(x => x.id === id);
  form.id_cliente.value = c.id;
  form.nombre.value = c.nombre;
  form.dni.value = c.dni;
  form.telefono.value = c.telefono;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const clientes = DB.get('clientes');
  const id = Number(form.id_cliente.value);
  const datos = {
    nombre: form.nombre.value.trim(),
    dni: form.dni.value.trim(),
    telefono: form.telefono.value.trim()
  };

  if (!/^\d{8}$/.test(datos.dni)) { 
    alert('El DNI debe tener 8 dígitos'); 
    return; 
  }
  if (id) {
    Object.assign(clientes.find(c => c.id === id), datos);
  } else {
    clientes.push({ id: DB.nextId(clientes), ...datos });
  }
  DB.save('clientes', clientes);
  form.reset();
  form.id_cliente.value = '';
  listar();
});

buscar.addEventListener('input', () => listar(buscar.value));
listar();