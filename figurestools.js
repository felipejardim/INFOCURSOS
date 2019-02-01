var myImages= document.getElementsByClassName('col')
var typeChart=['BIN','BIM','PIN','PIM','BAR','PIT']
/***
Função que permite a visualização dos gráficos.
****/
function buildFigures(){
  buildDatalist()
    .then(chosens => {
      // seleciona o cod correspondente ao curso escolhido pelo usuario
      var cod = chosens[0].Cod
      //escreve na tela "nome do curso"/"campus"
      document.getElementById('titleGalery').innerHTML=`<h2>${chosens[0].Curso} / ${chosens[0].Campus}</h2>`
      typeChart.map((e,i)=> {
        //busca a imagem
        //Caso a imagem exista ela é imprimida na tela
        //caso não a mensagem "Ah, não! Não há dados sobre esse indicador" aparece  
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
