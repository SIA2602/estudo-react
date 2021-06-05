import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
import ComponentList from './ComponentList';

function ComponentCard(props){
    const {Title} = props
    const {Dados} = props    

    return(
        <Card className="marginRight" title={Title} extra={<a href={'#'}>More</a>} style={{ width: 300 }}>
            <ComponentList data={Dados}/>
        </Card>
    )
}

export default ComponentCard