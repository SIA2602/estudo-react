import 'antd/dist/antd.css'
import './index.css'

function ActionAtivos()
{
    return(                                      
        document.getElementById("id01").style.display = "none",         
        document.getElementById("id02").style.display = "none",
        document.getElementById("id03").style.display = "flex"                
    )
}

export default ActionAtivos