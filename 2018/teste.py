## script para verificar se faltam imagens
## isso não necessariamente é um erro na geração das imagens
## pode ser apenas que a informação realmente não exista..

pastas    = ['BIN','BIM','PIN','PIM','BAR','PIT','SIS']
descPasta = ['Distribuição das Idades - Alunos Ingressantes', 'Distribuição das Idades - Alunos Matriculados', 'Distribuição dos Alunos Ingressantes por Sexo', 'Distribuição dos Alunos Ingressantes por Sexo', 'Distribuição dos Alunos Ingressantes por Tipo de Ingresso', 'Distribuição dos Alunos Ingressantes por Tipo de Vaga', 'Nota de Corte no SISU por Tipo de Vaga']

z=0
for pasta in pastas:
    
    x = 1
    nf = []
    print('Em '+pasta+' ('+descPasta[z]+'): ')
    
    while(x<=133):
        try:
            arq = open(pasta+'/'+str(x)+'.jpeg')
        except IOError:
            nf.append(str(x))    
        
        x=x+1

    print(nf)
    z=z+1
