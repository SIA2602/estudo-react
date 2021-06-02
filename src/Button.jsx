import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'; 

function ButtonReturn(props)
{
    const {name, onClick} = props 
    return(
        <Button onClick={onClick}>{name}</Button>
    )
}

export default ButtonReturn