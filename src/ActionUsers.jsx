import 'antd/dist/antd.css'
import './index.css'

function ActionUsers()
{
    return(                                      
        document.getElementById("id01").style.display = "none",         
        document.getElementById("id02").style.display = "flex",
        document.getElementById("id03").style.display = "none"                
    )
}

export default ActionUsers