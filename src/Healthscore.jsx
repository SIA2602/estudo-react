import React from 'react'
import ReactDOM from 'react-dom'
import { Progress } from 'antd';
import 'antd/dist/antd.css'
import './index.css'

function Healthscore()
{
    return(                                      
        <Progress
            className="alignCenter"
            type="circle"
            strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
            }}
            percent={25}
        />                
    )       
}

export default Healthscore