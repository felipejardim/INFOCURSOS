
var myImages= document.getElementsByClassName('col')


fetch('2017/BAR/1.jpeg')
.then(function(response) {
  if (response.status===200){
    return response.blob().then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      console.log(objectURL)
      Object.values(myImages)[1].innerHTML=`<figure class="figure"><img src="${objectURL}" class="figure-img img-fluid rounded"></figure>`
    });
  }  else{
    throw 'Ah, não! Não há dados sobre esse indicador'
  }
})
.catch(function(e){
    myImage.innerHTML= `<h4>${e}</h4>`
})
