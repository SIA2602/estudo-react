import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'

import ComponentCard from './ComponentCard'
import ActionUnit from './ActionUnit'
import ActionUsers from './ActionUsers'

const listaDados =  [
    ['5 inAlert','2 Downtime','1 inOperation'], 
    ['3 inAlert','1 Downtime','6 inOperation']
] 

const listaUnidades = [
    ['Unidade Jaguar'],
    ['Unidade Tobias']
]

const listaUser = [['Nome01'],['Nome02'],['Nome03'], ['Nome04'], ['Nome05']]

const unitID = [ 1, 2, 1, 1, 2]

function GeraCard() {   

    var listaUnit = []  
    for(var i=0; i<listaUnidades.length; i++){        
        {listaUnit.push(<ComponentCard title={listaUnidades[i]} listaDados={listaDados[i]} funcao={ActionUnit}/>)}
    } 
    
    var listaUsers = []  
    for(var i=0; i<unitID.length; i++){
        listaUsers.push(<ComponentCard title={unitID[i]} listaDados={listaUser[i]} funcao={ActionUsers}/>)
    }
    
    return(    
        <div className="slider colorBackground alignCenter">                      
            <div className="slides" id="id01">                                 
                {listaUnit}                            
            </div>  
            <div className="slides" id="id02">                                
                {listaUsers}                   
            </div>                
        </div>
    )     
}


export default GeraCard

ReactDOM.render(<GeraCard />, document.getElementById('root'))