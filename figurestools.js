var myImages= document.getElementsByClassName('col')
var typeChart=['BIN','BIM','PIN','PIM','BAR','PIT']

function buildFigures(){
  buildDatalist()
    .then(chosens => {
      var cod = chosens[0].Cod
      document.getElementById('titleGalery').innerHTML=`<h2>${chosens[0].Curso} / ${chosens[0].Campus}</h2>`
      typeChart.map((e,i)=> {
        fetch(`2017/${e}/${cod}.jpeg`)
          .then(function(response) {
            if (response.status===200){
              return response.blob().then(function(myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                Object.values(myImages)[i].innerHTML=`<figure class="figure"><img src="${objectURL}" class="figure-img img-fluid rounded"></figure>`
              })
            }else{
              myImages[i].innerHTML= `<div class="error"><h4>Ah, não! Não há dados sobre esse indicador</h4></div>`
            }
          })
      })
    })
}
