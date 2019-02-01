const botao= document.getElementById('btn-pesquisar')
const alert= document.getElementById('alert-emptyfields')

//gerencia os eventos e executa as funções correspondentes
document.body.onload = buildDatalist
input.campus.onchange = buildDatalist
input.cursos.onchange = buildDatalist
input.turnos.onchange = buildDatalist
input.anos.onchange = buildDatalistAno

/***Gerencia o botao "Pesquisar".
Quando nem todos os campos estão preenchidos, aparece na tela um alert com uma mensagem de erro.
Caso contrario, a função buildFigures é executada***/
botao.onclick = function (){
  var form=Object.values(input).filter(e=>e.value==="")
  if (form.length == 0){
    buildFigures()
    alert.style.display='none'
  }else{
    alert.style.display='block'
  }
}
