const botao= document.getElementById('btn-pesquisar')
const alert= document.getElementById('alert-emptyfields')

document.body.onload = buildDatalist
input.campus.onchange = buildDatalist
input.cursos.onchange = buildDatalist
input.turnos.onchange = buildDatalist
input.anos.onchange = buildDatalistAno
botao.onclick = function (){
  var form=Object.values(input).filter(e=>e.value==="")
  if (form.length == 0){
    buildFigures()
    alert.style.display='none'
  }else{
    alert.style.display='block'
  }
}
//alert.classList.toggle('appear')
/*
  ${input.anos.value}/${chart.typeChart[i]}/${chart.Cod}.jpeg
*/
