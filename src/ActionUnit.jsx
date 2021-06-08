import 'antd/dist/antd.css'
import './index.css'

function ActionUnit()
{
    return(                                      
        document.getElementById("id01").style.display = "flex",           
        document.getElementById("id02").style.display = "none",
        document.getElementById("id03").style.display = "none"                
    )       
}

export default ActionUnit