import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
import ComponentList from './ComponentList';
import Charts from './Charts'

function ComponentCard(props){
    const {title} = props;
    const {listaDados} = props
    const {funcao} = props     
    const {charts} = props 
    
    if(charts == undefined){
        return(
            <Card className="marginRight" title={title} extra={<a onClick={funcao}>More</a>} style={{ width: 300 }}>
                <ComponentList data={listaDados}/>
            </Card>
        )
    }

    else{
        return(
            <Card className="marginRight" title={title} extra={<a onClick={funcao}>More</a>} style={{ width: 300 }}>
                <div className="alignCenter">
                    <h3>Status dos Ativos<a onClick={funcao}> More</a></h3>
                </div>
                
                <Charts options={charts} />                
            </Card>
        )
    }    
}

export default ComponentCard