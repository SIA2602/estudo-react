import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import './index.css'

//Trabalhando com Components dentro de Components
import ComponentCard from './ComponentCard'

const listaDados = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.' ]    

function GeraCard() {     
    return(       
        <div className="colorBackground">
            <ComponentCard Title={'Card01'} Dados={listaDados}/>
        </div>
    )    
}

ReactDOM.render(<GeraCard />, document.getElementById('root'))


//Inserindo Componentes genericos: Button do AntDesign
/*import ButtonReturn from './Button.jsx'

function imprime() {    
    return(        
        alert('Ola Mundo!')      
    )
}

function App() {        
    return(
        <div>
            <ButtonReturn onClick={() => imprime()} name="Clique Aqui"/>            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))*/


//Estudo de Elementos
/*var elemento01 = <h1>User:</h1>
var elemento02 = <h2>Danilo Jose da Silva</h2>

function UneElementos() {
    return(
        <div>
            {elemento01}
            {elemento02}
        </div>       
    )
}
ReactDOM.render(<UneElementos />, document.getElementById('root'))*/



//Estudo de componentes
/*import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))*/