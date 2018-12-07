const botao= document.getElementById('btn-pesquisar')
const alert= document.getElementById('alert-emptyfields')

document.body.onload = buildDatalist
input.campus.onchange = buildDatalist
input.cursos.onchange = buildDatalist
input.turnos.onchange = buildDatalistAno
input.anos.onchange = buildDatalist
botao.onclick= buildFigures



/*botao.onclick = function (){
  var form=Object.values(input).filter(e=>e.value==="")
  if (form.length == 0){
    botao.onclick= buildFigures()
    alert.style.display= 'none'
  } else{
    alert.style.display= 'block'
    console.log(form)
  }
}*/
