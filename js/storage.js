// Funciones comunes para guardar y leer datos en localStorage
const DB = {
  get(clave) {
    return JSON.parse(localStorage.getItem(clave)) || [];
  },
  save(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
  },
  nextId(lista) {
    return lista.length ? Math.max(...lista.map(x => x.id)) + 1 : 1;
  }
};
