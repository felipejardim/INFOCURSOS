pastas = ['BAR', 'BIN', 'BIM', 'PIM', 'PIN', 'PIT', 'SIS']

for pasta in pastas:
    #input('1')
    x = 1
    nf = []
    print('Em '+pasta+': ')
    
    while(x<=133):
        try:
            arq = open(pasta+'/'+str(x)+'.jpeg')
        except IOError:
            nf.append(str(x))    
        
        x=x+1

    print(nf)
