import React from 'react'
import ComponentCard from './ComponentCard'

const listaDados =  [
    ['5 inAlert','2 Downtime','1 inOperation'], 
    ['3 inAlert','1 Downtime','6 inOperation']
] 

const listaUnidades = [
    ['Unidade Jaguar'],
    ['Unidade Tobias']
]

function ArrayComponentsUnidades(){  
    var listCard = [];
    for (var i=0; i<listaUnidades.length; i++){
        listCard.push(<ComponentCard Title={listaUnidades[i]} Dados={listaDados[i]}/>)
    } 

    return(listCard)
}

export default ArrayComponentsUnidades