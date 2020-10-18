import React, {useState} from 'react'
import {Collapse, Radio} from 'antd'; 
const {Panel} = Collapse; 

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $24.99",
        "array": [0, 24.99]
    },
    {
        "_id": 2,
        "name": "$25 to $49.99",
        "array": [25, 49.99]
    },
    {
        "_id": 3,
        "name": "$50 to $74.99",
        "array": [50, 74.99]
    },
    {
        "_id": 4,
        "name": "$75 to $99.99",
        "array": [75, 99.99]
    },
    {
        "_id": 5,
        "name": "More than $100",
        "array": [100, 1500000]
    }
]

function RadioBox(props) {
    const [Value, setValue] = useState('0')
    
    const renderRadioBox = () => (
        price.map((value) => (
            <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio> 
        ))
    )
    
    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Sort by Price" key="1">
                    <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
