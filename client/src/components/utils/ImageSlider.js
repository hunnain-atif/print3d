import React from 'react'
import {Carousel} from 'antd'; 

// TODO: need to look into images not being squished 

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((images, index)=> (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px'}} src={`http://localhost:5000/${images}`} alt="productImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
