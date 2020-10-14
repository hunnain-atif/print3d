import React from 'react'
import Dropzone from 'react-dropzone'; 
import {Icon} from 'antd'; 
function FileUpload() {
    return (
        <div style={{ display:'flex', justifyContent:'space-between' }}>
            <Dropzone onDrop multiple maxSize>
                {({getRootProps, getInputProps}) => (
                    <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display:'inline-flex', alignItems:'center', justifyContent:'center'}}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{fontSize: '3rem'}} />
                        <label>Upload Images Here...</label>
                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload
