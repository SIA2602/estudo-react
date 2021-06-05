import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import './index.css'

function ActionUnit()
{    
    return(
        <div className="slider colorBackground alignCenter">                
            <div className="slides">                                
                {document.getElementById("id01").style.display = "none"}
                {document.getElementById("id02").style.display = "block"}                                
            </div>                                                              
        </div>    
    )
}

export default ActionUnit