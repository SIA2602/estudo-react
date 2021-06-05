import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'

function ActionUsers()
{    
    return(
        <div className="slider colorBackground alignCenter">                
            <div className="slides">                                
                {document.getElementById("id01").style.display = "block"}
                {document.getElementById("id02").style.display = "none"}                             
            </div>                                                              
        </div>           
    )
}

export default ActionUsers