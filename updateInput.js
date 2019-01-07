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
      updateDatalist(datalist.anos, anos)


      return chosens
    }
)
}

function buildDatalistAno(){
  metaData.then(e => {
      var anos = match('Ano')(e)
      updateDatalist(datalist.anos, anos)
    }
  )
}

// atributesMatch
const campusOf = match("Campus")
const cursosOf = match("Curso")
const turnosOf = match("Turno")
const anosOf = match("Ano")
