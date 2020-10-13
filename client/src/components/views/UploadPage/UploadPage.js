import React, {useState} from 'react'

function UploadPage() {
    
    const [TitleValue, setTitleValue] = useState("")

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)

    }
    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom:'2rem'}}>
                <h2>Upload Product</h2>
            </div>

            <form onSubmit>
                {/*DropZone*/}
                <br />
                <br />
                <label>Name</label>
                <input onChange={onTitleChange} value={TitleValue} />
                <br />
                <br />
                <label>Description</label>
                <textarea onChange value />
                <label>Description</label>
                <br />
                <br />
                <label>Price ($)</label>
                <input onChange value  type="number"/>
                <br />
                <br />
                <button onClick>
                    Submit
                </button>


            </form>
            
        </div>
    )
}

export default UploadPage
