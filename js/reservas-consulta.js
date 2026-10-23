const tablaReservas = document.getElementById('tabla-reservas');
const filtroFecha = document.getElementById('filtro-fecha');

function listarReservas() {
    const clientes = DB.get('clientes') || [];
    const servicios = DB.get('servicios') || [];
    const reservas = (DB.get('reservas') || [])
        .filter(r => !filtroFecha.value || r.fecha === filtroFecha.value);

    tablaReservas.innerHTML = reservas.map(r => {
        const c = clientes.find(x => x.id === r.clienteId);
        const s = servicios.find(x => x.id === r.servicioId);
        const accion = r.estado === 'ACTIVA' ? `<button onclick="cancelar(${r.id})">Cancelar</button>` : '';

        return `<tr> 
            <td>${r.id}</td>
            <td>${c ? c.nombre : '-'}</td>
            <td>${s ? s.nombre : '-'}</td> 
            <td>${r.fecha}</td>
            <td>${r.hora}</td>
            <td>${r.estado}</td>
            <td>${accion}</td> 
        </tr>`;
    }).join('');
}

function cancelar(id) {
    const reservas = DB.get('reservas') || [];
    const reserva = reservas.find(r => r.id === id);
    if (reserva) {
        reserva.estado = 'CANCELADA';
        DB.save('reservas', reservas);
        listarReservas();
    }
}

filtroFecha.addEventListener('change', listarReservas);
listarReservas();
