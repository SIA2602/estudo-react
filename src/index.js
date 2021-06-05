import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import './index.css'

//Trabalhando com Components dentro de Components
import ArrayComponentsUnidades from './ArrayComponentsUnidades'
import ArrayComponentsUsers from './ArrayComponentsUsers';

function GeraCard() {     
    return(             
        <div className="slider colorBackground alignCenter">                
            <div className="slides">                
                <ArrayComponentsUnidades />                   
            </div>   

            <div className="slides">                
                <ArrayComponentsUsers />                   
            </div>                        
        </div>
    )    
}

ReactDOM.render(<GeraCard />, document.getElementById('root'))