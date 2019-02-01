/***
Essa função é responsável por filtrar os elementos correspondentes ao curso, campos, turno e ano e
encaminhar os dados que serao colocados no Datalist.
A função é executada apos a promise metaData e multiFilter serem atendidas.
Ela recebe como parametro todos os dados do metaData e os dados que o usuario deseja filtrar. Em seguida chama a função match (retirando
a possibilidade de repetição dos dados) e por fim chama a função updateDatalist.
Por exemplo, se o usuario selecionar o campus "CUIABÁ", a função passa pela match retirando as repetições e é enviada para a updateDatalist
que cria a tag <datalist> (no index) correspondente.    
***/
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
