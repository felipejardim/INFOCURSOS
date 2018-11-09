// prepara o metaData pra ser filtrado
const multiFilter = arr => filters => Object.entries(filters).reduce(
    (a, b) => a.filter(e => e[b[0]] === b[1]), arr)
