import React, {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd'; 
import FileUpload from "../../utils/FileUpload"

const {Title} = Typography; 
const {TextArea} = Input; 

const Categories = [
    {key:1, value: "3D-Model"}, 
    {key:2, value: "3D-Printed Object"}
]

function UploadPage() {
    
    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const[PriceValue, setPriceValue] = useState(0)
    const[CategoryValue, setCategoryValue] = useState(1)

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)

    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategoryChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Product</Title>
            </div>

            <Form onSubmit>
                {/*DropZone*/}
                <FileUpload/>
                <br />
                <br />
                <label>Name</label>
                <Input onChange={onTitleChange} value={TitleValue} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
                <br />
                <br />
                <label>Price ($)</label>
                <Input onChange={onPriceChange} value={PriceValue}  type="number"/>
                <br />
                <br />
                <select onChange={onCategoryChange} value={CategoryValue}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button onClick>
                    Upload
                </Button>
            </Form>
        </div>
    )
}

export default UploadPage
