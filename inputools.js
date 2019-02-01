// ponteiros para os inputs
const input = {
    "campus": document.getElementById('input-campus'),
    "cursos": document.getElementById('input-cursos'),
    "turnos": document.getElementById('input-turno'),
    "anos": document.getElementById('input-ano')
  }

//cria um objeto com as informações dos campos que o usuario deseja filtrar no campo "Pesquisar curso" 
function getInputs() {
  const campus = input.campus.value
  const curso = input.cursos.value
  const turno = input.turnos.value

  const r = {}

  if (campus.trim() !== ""){
    r.Campus = campus
  }
  if (curso.trim() !== ""){
    r.Curso = curso
  }
  if (turno.trim() !== ""){
    r.Turno = turno
  }

  return r
}
