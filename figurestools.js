// buildtool gera uma promessa com os valores compatíveis com os inputs

var myImages= document.getElementsByClassName('col')
var typeChart=['BIN','BIM','PIN','PIM','BAR','PIT']

function buildFigures(){
  buildDatalist().then(
    chosens => {
      var cod = chosens[0].cod
      document.getElementById('titleGalery').innerHTML=`<h2>${chosens[0].Curso} / ${chosens[0].Campus}</h2>`
      typeChart.map((e,i)=> {
      console.log(chosens[0].cod)
      fetch(`2017/${e}/${cod}.jpeg`)
        .then(function(response) {
          if (response.status===200){
            return response.blob().then(function(myBlob) {
              var objectURL = URL.createObjectURL(myBlob);
              console.log(objectURL)
              Object.values(myImages)[i].innerHTML=`<figure class="figure"><img src="${objectURL}" class="figure-img img-fluid rounded"></figure>`
            });
          }else{
            throw 'Ah, não! Não há dados sobre esse indicador'
          }
        })
        .catch(function(e){
          myImage.innerHTML= `<h4>${e}</h4>`
        })
      })
    }
  )
}

/*var charts = document.getElementsByClassName('col')

function updateFigure(chart) {
  Object.values(charts).map(
    (e,i)=> e.innerHTML =`<figure class="figure"><img src="${input.anos.value}/${chart.typeChart[i]}/${chart.Cod}.jpeg" class="figure-img img-fluid rounded" alt="Não há dados sobre esse indicador"></figure>`
  )
}*/
