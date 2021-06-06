import 'antd/dist/antd.css'
import './index.css'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Charts(props)
{
    const {options} = props

    return(                                      
        <HighchartsReact highcharts={Highcharts} options={options} />           
    )
}

export default Charts