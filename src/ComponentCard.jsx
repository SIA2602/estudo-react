import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
import ComponentList from './ComponentList';

function ComponentCard(props){
    const {title} = props
    const {listaDados} = props
    const {funcao} = props 
    const {icon} = props
   
    return(
        <Card className="marginRight" title={title} extra={<button onClick={funcao}>{icon}</button>} style={{ width: 300 }}>
            <ComponentList data={listaDados}/>
        </Card>
    )       
}

export default ComponentCard