import React from 'react'
import Dropzone from 'react-dropzone'; 
import {Icon} from 'antd'; 

function FileUpload() {

    const onDrop =(files)=> {
         let formData = new FormData(); 
         const config = {
             header: {'content-type': 'multipart/form-data'}
         }
         formData.append("file", files[0])

         //Axios.post('/api/product/uploadImage', formData, config)
         .then(response => {
             if(response.data.success) {
                
             } else {
                 alert('Failed to save the image in the server')
             }
         })
    }

    return (
        <div style={{ display:'flex', justifyContent:'space-between' }}>
            <Dropzone onDrop={onDrop} multiple maxSize>
                {({getRootProps, getInputProps}) => (
                    <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display:'inline-flex', alignItems:'center', justifyContent:'center'}}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{fontSize: '3rem'}} />
                        <label>Upload Image(s) Here...</label>
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                <div onClick>
                    <img />
                </div>
            </div>
        </div>
    )
}

export default FileUpload
