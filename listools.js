// ponteiro para as datalist
const datalist = {
    "campus": document.getElementById('datalist-campus'),
    "cursos": document.getElementById('datalist-cursos'),
    "ano": document.getElementById('datalist-ano'),
    "turnos": document.getElementById('datalist-turno')
}

// CursosMatch
const match = prop => e => e.map(
  e => e[prop]
).reduce(
  (a, b) => a.includes(b) ? a : a.concat(b), []
)

function updateDatalist (datalist, options) {
  datalist.innerHTML =  options.reduce((a, b) => a + `<option value="${b}"></option>`, '')
  
}
