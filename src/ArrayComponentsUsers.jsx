import React from 'react'
import ComponentCard from './ComponentCard'

const listaUser = [['Nome01'],['Nome02'],['Nome03'], ['Nome04'], ['Nome05']]

const unitID = [ 1, 2, 1, 1, 2]

function ArrayComponentsUsers(){  
    var listCard = [];
    for (var i=0; i<unitID.length; i++){
        listCard.push(<ComponentCard Title={unitID[i]} Dados={listaUser[i]}/>)
    } 

    return(listCard)
}

export default ArrayComponentsUsers