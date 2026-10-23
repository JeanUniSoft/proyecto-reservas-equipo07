# Sistema de Reservas – Equipo 07

Primera versión de un sistema web para gestionar clientes, servicios y reservas de una empresa de servicios.
Curso: Herramientas de Desarrollo – UTP · Avance de Proyecto Final 2.

## Integrantes y responsabilidades

| Integrante | Responsabilidad | Rama |
|---|---|---|
| Javier Jean Piere Sanchez Cabrera | Estructura base, integración y versión | main / develop |
| Francisco Javier Vargas Rojas | Módulo de clientes | feature/clientes |
| Andrea Del Pilar Chávez Alarcón | Módulo de servicios | feature/servicios |
| José Eduardo Carbonel Del Castillo | Registro de reservas | feature/reservas-registro |
| Violeta Chuqui Li | Consulta y cancelación de reservas | feature/reservas-consulta |

## Estrategia de ramas

- `main`: solo versiones estables. Protegida: requiere Pull Request con 1 aprobación.
- `develop`: integración de funcionalidades. Protegida: requiere Pull Request con 1 aprobación.
- `feature/*`: una rama por funcionalidad; sale de `develop` y vuelve por Pull Request revisado.

## Gestión de actividades

Tablero Trello «Reservas – Equipo 07» con las listas Pendientes, Seleccionadas (v1.0), En progreso, En revisión y Terminado.
Cada requerimiento tiene un código `RQ-xx` que se usa en la tarjeta, en los commits y en el Pull Request.

## Funcionalidades de la versión 1.0

- Reservas: registrar con cliente, servicio, fecha y hora (RQ-07, RQ-08, RQ-09).
- Clientes: registrar, modificar y consultar (RQ-01, RQ-02, RQ-03)

## Pendiente para versiones posteriores (v2.0)

- RQ-12 Recordatorios automáticos
- RQ-13 Reportes
- RQ-14 Dashboard de indicadores
- RQ-15 Pagos en línea
- RQ-16 Historial de clientes

## Cómo ejecutar

Abrir `index.html` en el navegador. Los datos se guardan en `localStorage`.
