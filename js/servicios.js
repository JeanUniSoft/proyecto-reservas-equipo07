// RQ-04 registrar, RQ-05 precio y duración, RQ-06 consultar servicios
const form = document.getElementById('form-servicio');
const tabla = document.getElementById('tabla-servicios');
const buscar = document.getElementById('buscar');

function listar(filtro = '') {
  const servicios = DB.get('servicios').filter(s =>
    s.nombre.toLowerCase().includes(filtro.toLowerCase()));
  tabla.innerHTML = servicios.map(s => `
    <tr>
      <td>${s.id}</td><td>${s.nombre}</td>
      <td>${s.precio.toFixed(2)}</td><td>${s.duracion}</td>
    </tr>`).join('');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const servicios = DB.get('servicios');
  servicios.push({
    id: DB.nextId(servicios),
    nombre: form.nombre.value.trim(),
    precio: Number(form.precio.value),
    duracion: Number(form.duracion.value)
  });
  DB.save('servicios', servicios);
  form.reset();
  listar();
});

buscar.addEventListener('input', () => listar(buscar.value));
listar();