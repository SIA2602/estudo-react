import { Progress } from 'antd';
import 'antd/dist/antd.css'
import './index.css'

function Healthscore(props)
{
    const {percent} = props    
    return(                                      
        <Progress
            className="alignCenter"
            type="circle"
            strokeColor={{              
            '0%': 'magenta',            
            '100%': 'cyan'            
            }}
            percent={percent}
        />                
    )       
}

export default Healthscore