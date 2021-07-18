import React from 'react'
import { List, Typography} from 'antd';
import 'antd/dist/antd.css'; 

class ComponentList extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {data: props.data} 
    }

    render(){
        return(
            <List           
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                    </List.Item>
                )}
            />
        )
    }     
}

export default ComponentList