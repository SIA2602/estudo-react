import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'

import ComponentCard from './ComponentCard'
import ActionUnit from './ActionUnit'
import ActionUsers from './ActionUsers'
import Healthscore from './Healthscore'
import Charts from './Charts'
import Status from './Status'
import {PlusCircleOutlined} from '@ant-design/icons';

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

const imagem01 = <img className="resizeImage" src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"></img>
const imagem02 = <img className="resizeImage" src="https://tractian-img.s3.amazonaws.com/dc8a497655c688ce381d6a3ba4af684d.jpeg"></img>
const imagem03 = <img className="resizeImage" src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"></img>

const statusSuccess = <Status message={"inOperation"} type={'success'}/>
const statusAlert = <Status message={"inAlert"} type={'warning'}/>
const statusErro = <Status message={"inDowntime"} type={'error'}/>

const bar01 = <h3><Healthscore percent={85}/>healthscore</h3>
const bar02 = <h3><Healthscore percent={55}/>healthscore</h3>
const bar03 = <h3><Healthscore percent={23}/>healthscore</h3>

const status = <h3 className="">Status dos Ativos <a onClick={ActionUnit}><PlusCircleOutlined /></a><Charts options={options} /> </h3>

const listaDados =  [
    [status], 
    [status]
] 

const listaUnidades = [
    ['Unidade Jaguar'],
    ['Unidade Tobias']
]

const listaUser = [[imagem01, statusErro, bar01], [imagem02, statusAlert,  bar02], [imagem03, statusSuccess, bar03]]

const unitID = ['Motor H13D-1', 'Motor H13D-1', 'Motor H13D-1']

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
            <div className="slides oculta" id="id02">                                
                {listaUsers}                   
            </div>                         
        </div>       
    )     
}

ReactDOM.render(<GeraCard />, document.getElementById('root'))