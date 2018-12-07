function buildDatalist(){
  const filters = getInputs()

  return metaData.then(
    multiFilter
  ).then(
    f => f(filters)
  ).then(
    chosens => {
      const campus = campusOf(chosens)
      const cursos = cursosOf(chosens)
      const turnos = turnosOf(chosens)
      const anos = anosOf(chosens)

      updateDatalist(datalist.campus, campus)
      updateDatalist(datalist.cursos, cursos)
      updateDatalist(datalist.turnos, turnos)


      return chosens
    }
)
}


// atributesMatch
const campusOf = match("Campus")
const cursosOf = match("Curso")
const turnosOf = match("Turno")
const anosOf = match("Ano")
