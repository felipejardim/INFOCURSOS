//links
bSobre = window.document.getElementById('botaoSobre');
bMetodologia = window.document.getElementById('botaoMetodologia');
bEquipe = window.document.getElementById('botaoEquipe');
//textos
sobre = window.document.getElementById('sobre');
metodologia = window.document.getElementById('metodologia');
equipe = window.document.getElementById('equipe');

bSobre.onclick = function(e){
    e.preventDefault();
    sobre.style.display = 'inline';
    equipe.style.display = 'none';
    metodologia.style.display = 'none';
}

bMetodologia.onclick = function(e){
    e.preventDefault();
    sobre.style.display = 'none';
    equipe.style.display = 'none';
    metodologia.style.display = 'inline';
}

bEquipe.onclick = function(e){
    e.preventDefault();
    sobre.style.display = 'none';
    equipe.style.display = 'inline';
    metodologia.style.display = 'none';
}