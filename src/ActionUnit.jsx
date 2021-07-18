import React from 'react'
import 'antd/dist/antd.css'
import './index.css'

class ActionUnit extends React.Component{
    render(){
        return(                                      
            document.getElementById("id01").style.display = "flex",           
            document.getElementById("id02").style.display = "none",
            document.getElementById("id03").style.display = "none"                
        ) 
    }          
}

export default ActionUnit