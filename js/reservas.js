// RQ-07 registrar reserva, RQ-08 seleccionar cliente y servicio, RQ-09 fecha y hora
const formReserva = document.getElementById('form-reserva');
const selCliente = document.getElementById('cliente');
const selServicio = document.getElementById('servicio');

function cargarOpciones() {
  selCliente.innerHTML = '<option value="">-- Seleccione cliente --</option>' +
    DB.get('clientes').map(c => `<option value="${c.id}">${c.nombre}</option>`).join('');
  selServicio.innerHTML = '<option value="">-- Seleccione servicio --</option>' +
    DB.get('servicios').map(s => `<option value="${s.id}">${s.nombre} (S/ ${s.precio})</option>`).join('');
}

formReserva.addEventListener('submit', e => {
  e.preventDefault();
  if (!selCliente.value || !selServicio.value) {
    alert('Seleccione un cliente y un servicio');
    return;
  }
  const reservas = DB.get('reservas');
  const ocupado = reservas.some(r => r.fecha === formReserva.fecha.value &&
    r.hora === formReserva.hora.value && r.estado === 'ACTIVA');
  if (ocupado) {
    alert('Ya existe una reserva activa en esa fecha y hora');
    return;
  }
  reservas.push({
    id: DB.nextId(reservas),
    clienteId: Number(selCliente.value),
    servicioId: Number(selServicio.value),
    fecha: formReserva.fecha.value,
    hora: formReserva.hora.value,
    estado: 'ACTIVA'
  });
  DB.save('reservas', reservas);
  formReserva.reset();
  alert('Reserva registrada');
  document.dispatchEvent(new Event('reservas-actualizadas'));
});

cargarOpciones();
