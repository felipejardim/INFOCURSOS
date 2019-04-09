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
                Object.values(myImages)[i].innerHTML=`<p id="legenda-${i}" style="text-align: center"><strong>${insereLegenda(i)}</strong</p><figure class="figure"><img src="${objectURL}" class="figure-img img-fluid rounded"></figure>\n`
              })
            }else{
              myImages[i].innerHTML= `<p id="legenda-${i}" style="text-align: center"><strong>${insereLegenda(i)}</strong</p><div class="error"><h4>Ah, não! Não há dados sobre esse indicador</h4></div>`
            }
          })
      })
    })
}

let insereLegenda = function (i){
  switch(i){
    case 0:
    return "Districuição das Idades - Alunos Ingressantes";

    case 1:
    return "Distribuição das Idades - Alunos Matroculados";

    case 2:
    return "Distribuição dos Alunos Ingressantes por Sexo";

    case 3:
    return "Distribuição dos Alunos Matriculados por Sexo";

    case 4:
    return "Nota de Corte no SISU por Tipo de Vaga";

    case 5:
    return "Distribuição dos Alunos por Tipo de Ingresso";

    default:
    return "Você não deveria me ver";
  }  

  }
