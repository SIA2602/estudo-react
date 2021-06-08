import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
import ComponentList from './ComponentList';
import Charts from './Charts'
import {PlusCircleOutlined} from '@ant-design/icons';

function ComponentCard(props){
    const {title} = props;
    const {listaDados} = props
    const {funcao} = props 
   
    return(
        <Card className="marginRight" title={title} extra={<a onClick={funcao}><PlusCircleOutlined /></a>} style={{ width: 300 }}>
            <ComponentList data={listaDados}/>
        </Card>
    )       
}

export default ComponentCard