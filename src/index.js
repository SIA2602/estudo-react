import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'

import ComponentCard from './ComponentCard'
import ActionUnit from './ActionUnit'
import ActionUsers from './ActionUsers'

const listaDados =  [
    ['5 inAlert','2 downTime','1 inOperation'], 
    ['3 inAlert','1 downTime','6 inOperation']
] 

const listaUnidades = [
    ['Unidade Jaguar'],
    ['Unidade Tobias']
]

const listaUser = [['Nome01'],['Nome02'],['Nome03'], ['Nome04'], ['Nome05']]

const unitID = [ 1, 2, 1, 1, 2]

const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: "", 
      useHTML: false    
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.y}',
                distance: -50
            },
            showInLegend: true,            
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,        
        data: [{
          name: 'inOperation',
          y: 3,
          color: 'green'          
        }, {
          name: 'inAlert',
          y: 5,
          color: 'orange'
        }, {
          name: 'inDowntime',
          y: 2,
          color: 'red'
        }]
      }]   
}

function GeraCard() {   

    var listaUnit = []  
    for(var i=0; i<listaUnidades.length; i++){        
        {listaUnit.push(<ComponentCard title={listaUnidades[i]} charts={options} funcao={ActionUnit}/>)}
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
            <div className="slides oculta" id="id02">                                
                {listaUsers}                   
            </div>                         
        </div>       
    )     
}

ReactDOM.render(<GeraCard />, document.getElementById('root'))