function buildFigures(){
  metaData.then(
    buildDatalist
  ).then(
    chosens => {
      const chart = {
        "Cod":chosens[0].Cod,
        "typeChart":['BIN','BIM','PIN','PIM','BAR','PIT']
      }
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
