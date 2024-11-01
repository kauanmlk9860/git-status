
const listaDeEstados = require('./estados_cidades.js')

/*                  FUNÇÃO UM                          */
const getListaDeEstados = function() {
    let siglaEtd = []

    listaDeEstados.listaDeEstados.estados.forEach(function(estado) {
        siglaEtd.push(estado.sigla)
    })
    if (siglaEtd.length === 0) {
        return false
    }

    return {
        uf: siglaEtd,
        quantidade: siglaEtd.length
    }
}

// console.log(getListaDeEstados())

/*                  FUNÇÃO DOIS                         */
const getDadosEstado = function(sigla) {  
    let dadosEstado = null

    listaDeEstados.listaDeEstados.estados.forEach((estado) => {  
        if (estado.sigla.toUpperCase() === sigla.toUpperCase()) {  
            dadosEstado = {  
                uf: estado.sigla.toUpperCase(),  
                descricao: estado.nome.toUpperCase(),  
                capital: estado.capital.toUpperCase(),  
                regiao: estado.regiao.toUpperCase()
            }
        }  
    }) 
    return dadosEstado || false  
}

//console.log(getDadosEstado('AM'))

/*                  FUNÇÃO TRÊS                         */
const getCapitalEstado = function(sigla) {
    let dadosEstado = null

    const estadoEncontrado = listaDeEstados.listaDeEstados.estados.find((estado) => {
        return estado.sigla.toUpperCase() === sigla.toUpperCase()
    })
    
    if (estadoEncontrado) {
        dadosEstado = {
            uf: estadoEncontrado.sigla.toUpperCase(),
            descricao: estadoEncontrado.nome.toUpperCase(),
            capital: estadoEncontrado.capital.toUpperCase()
        }
    }
    return dadosEstado || false  
}

//console.log(getCapitalEstado('AM'))


/*                  FUNÇÃO QUATRO                        */
const getEstadosRegiao = function(regiaoEstado) {
    let retornoDoObjeto = { uf: regiaoEstado.toUpperCase(), estados: [] }

    listaDeEstados.listaDeEstados.estados.forEach(function(estado) {
        if (estado.regiao.toUpperCase() === regiaoEstado.toUpperCase()) {
            let estadoInfo = { uf: estado.sigla.toUpperCase(), descricao: estado.nome.toUpperCase() }
            retornoDoObjeto.estados.push(estadoInfo)
        }
    })

    if (retornoDoObjeto.estados.length === 0) {
        return false
    }

    return retornoDoObjeto
}

//console.log(getEstadosRegiao('M'))

/*                  FUNÇÃO CINCO                       */  
const getCapitalPais = function() {
    let retornoDoObjeto = { capitais: [] }

    listaDeEstados.listaDeEstados.estados.forEach(function(estado) {
        if (estado.capital_pais) {
            let objeto = {
                capital_atual: estado.capital,
                uf: estado.sigla.toUpperCase(),
                descricao: estado.nome.toUpperCase(),
                capital: estado.capital.toUpperCase(),
                regiao: estado.regiao.toUpperCase(),
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_fim: estado.capital_pais.ano_fim
            }
            retornoDoObjeto.capitais.push(objeto)
        }
    })

    return retornoDoObjeto.capitais.length > 0 ? retornoDoObjeto : false
}

console.log(getCapitalPais())

/*                  FUNÇÃO SEIS                    */  

const getCidades = function(siglaEstado) {
    let retornoDoObjeto = { uf: siglaEstado.toUpperCase(), descricao: '', quantidade_de_cidades: 0, cidades: [] }

    const estadoEncontrado = listaDeEstados.listaDeEstados.estados.find((estado) => {
        return estado.sigla.toUpperCase() === siglaEstado.toUpperCase()
    })

    if (estadoEncontrado) {
        retornoDoObjeto.descricao = estadoEncontrado.nome.toUpperCase()

        estadoEncontrado.cidades.forEach(function(cidade) {
            retornoDoObjeto.cidades.push(cidade.nome.toUpperCase())
        })

        retornoDoObjeto.quantidade_de_cidades = retornoDoObjeto.cidades.length
    } else {
        return false  
    }
    return retornoDoObjeto.quantidade_de_cidades > 0 ? retornoDoObjeto : false
}

console.log(getCidades(''))

