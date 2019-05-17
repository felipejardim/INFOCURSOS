var myImages= document.getElementsByClassName('col')
var typeChart=['BIN','BIM','PIN','PIM','BAR','PIT','SIS']
/***
Função que permite a visualização dos gráficos.
****/
function buildFigures(){
  buildDatalist()
    .then(chosens => {
      let ano = document.getElementById('input-ano').value
      // seleciona o cod correspondente ao curso escolhido pelo usuario
      var cod = chosens[0].Cod
      //escreve na tela "nome do curso"/"campus"
      document.getElementById('titleGalery').innerHTML=`<h2>${chosens[0].Curso} / ${chosens[0].Campus}</h2>`
      typeChart.map((e,i)=> {
        //busca a imagem
        //Caso a imagem exista ela é imprimida na tela
        //caso não a mensagem "Ah, não! Não há dados sobre esse indicador" aparece  
        fetch(`${ano}/${e}/${cod}.jpeg`)
          .then(function(response) {
            if (response.status===200){
              return response.blob().then(function(myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                Object.values(myImages)[i].innerHTML=`<div><figure class="figure " style="margin-top: 50px"><figcaption class="figure-caption text-center" id="legenda-${i}" style=" color: black"><strong>${insereLegenda(i)}</strong></figcaption><img src="${objectURL}" id="imagem-${i}" class="figure-img img-fluid rounded" style="max-width: 530px;"></figure></div>\n`
              })
            }else{
              myImages[i].innerHTML= `<p id="legenda-${i}" style="text-align: center"><strong>${insereLegenda(i)}</strong</p><div class="error"><h4>Ah, não! Não há dados sobre esse indicador</h4></div>`
            }
          })
      })
    })

    document.getElementById('imagem-6').style.marginLeft = '50%'
}

let insereLegenda = function (i){
  switch(i){
    case 0:
    return "Distribuição das Idades - Alunos Ingressantes";

    case 1:
    return "Distribuição das Idades - Alunos Matriculados";

    case 2:
    return "Distribuição dos Alunos Ingressantes por Sexo";

    case 3:
    return "Distribuição dos Alunos Matriculados por Sexo";

    case 4:
    return "Distribuição dos Alunos Ingressantes por Tipo de Ingresso";

    case 5:
    return "Distribuição dos Alunos Ingressantes por Tipo de Vaga";

    case 6:
    return "Nota de Corte no SISU por Tipo de Vaga"

    default:
    return "Você não deveria me ver";
  }  

  }

