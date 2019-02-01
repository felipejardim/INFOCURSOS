//Cria o arquivo Json responsavel pela alimentação dos dados do site
const csv2json = e => e.split('\n').map(
  arr => arr.split(';')
).map((e, i, table) => ({
  [table[0][0]]: e[0],    // Cod
  [table[0][1]]: e[1],    //Campus
  [table[0][2]]: e[2],    //Curso
  [table[0][3]]: e[3],    //Grau
  [table[0][4]]: e[4],    //Turno
  [table[0][5]]: e[5]     //Ano
})).slice(1)

window.metaData = fetch('REL_CURSOS.csv').then(f => f.text()).then(csv2json)


// imprime no console
metaData.then(console.dir)
