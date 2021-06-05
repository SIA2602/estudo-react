import React from 'react'
import { List, Typography} from 'antd';
import 'antd/dist/antd.css'; 

function ComponentList(props)
{
    const {data} = props
    return(
        <List           
            dataSource={data}
            renderItem={item => (
                <List.Item>
                <Typography.Text mark></Typography.Text> {item}
                </List.Item>
            )}
        />
    )
}

export default ComponentList