// buildtool gera uma promessa com os valores compatíveis com os inputs
function buildFigures(){
  buildDatalist().then(
    chosens => {
      const chart = {
        "Cod":chosens[0].Cod,
        "typeChart":['BIN','BIM','PIN','PIM','BAR','PIT']
      }
      document.getElementById('titleGalery').innerHTML=`<h2>${chosens[0].Curso} / ${chosens[0].Campus}</h2>`
      updateFigure(chart)
    }
  )
}

var charts = document.getElementsByClassName('col')

function updateFigure(chart) {
  Object.values(charts).map(
    (e,i)=> e.innerHTML =`<figure class="figure"><img src="${input.anos.value}/${chart.typeChart[i]}/${chart.Cod}.jpeg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></figure>`
  )
}
