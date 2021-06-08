import { Alert } from 'antd';
import 'antd/dist/antd.css'
import './index.css'

function Status(props)
{
    const {message} = props
    const {type} = props
    
    return(                                      
        <Alert message={message} type={type} showIcon />                
    )       
}

export default Status