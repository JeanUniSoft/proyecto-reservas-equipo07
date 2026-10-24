const tablaReservas = document.getElementById('tabla-reservas');
const filtroFecha = document.getElementById('filtro-fecha');

function listarReservas() {
    // Si la base de datos está vacía, creamos datos de prueba simulados para tu captura
    const clientes = DB.get('clientes') || [{id: 1, nombre: 'Ana Torres'}];
    const servicios = DB.get('servicios') || [{id: 1, nombre: 'Corte de Cabello'}];
    const reservas = DB.get('reservas') || [{id: 101, clienteId: 1, servicioId: 1, fecha: '2026-10-23', hora: '15:30', estado: 'ACTIVA'}];

    const reservasFiltradas = reservas.filter(r => !filtroFecha.value || r.fecha === filtroFecha.value);

    tablaReservas.innerHTML = reservasFiltradas.map(r => {
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
    const clientes = DB.get('clientes') || [{id: 1, nombre: 'Ana Torres'}];
    const servicios = DB.get('servicios') || [{id: 1, module: 'Corte'}];
    const reservas = DB.get('reservas') || [{id: 101, clienteId: 1, servicioId: 1, fecha: '2026-10-23', hora: '15:30', estado: 'ACTIVA'}];
    
    const reserva = reservas.find(r => r.id === id);
    if (reserva) {
        reserva.estado = 'CANCELADA';
        DB.save('reservas', reservas);
        listarReservas();
    }
}

filtroFecha.addEventListener('change', listarReservas);
listarReservas();
