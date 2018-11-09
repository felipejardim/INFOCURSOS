// ponteiros para os inputs
const input = {
    "campus": document.getElementById('input-campus'),
    "cursos": document.getElementById('input-cursos'),
    "anos": document.getElementById('input-ano'),
    "turnos": document.getElementById('input-turno'),
    "botão":document.getElementById('btn-pesquisar')
}


function getInputs() {
  const campus = input.campus.value
  const curso = input.cursos.value
  const turno = input.turnos.value

  const r = {}

  if (turno.trim() !== "") {
    r.Turno = turno
  }
  if (campus.trim() !== "") {
    r.Campus = campus
  }
  if (curso.trim() !== "") {
    r.Curso = curso
  }

  return r
}
