import React from 'react'
import {Button} from 'antd'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    const renderItems = () => (
        props.products && props.products.map(products => (
            <tr key={products._id}>
                <td>
                    <img style={{width: '70px'}} alt="product" src={renderCartImage(products.images)} />
                </td>
                <td>{products.quantity}</td>
                <td>$ {products.price} / per</td>
                <td><Button size="large" shape="round" type="danger" 
                        onClick={() => props.removeItem(products._id)}
                        >Remove
                    </Button>
                </td>
            </tr>
        ))
    )

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product Quantity</th>
                    <th>Product Price</th>
                    <th>Remove from Cart</th>
                </tr>
            </thead>
            <tbody>
                {renderItems()}
            </tbody>
        </table>
    </div>
    )
}

export default UserCardBlock
