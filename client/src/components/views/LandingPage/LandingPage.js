import Axios from 'axios';
import React, {useEffect, useState} from 'react'

function LandingPage() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
        .then(response => {
            if(response.data.success) {
                setProducts(response.data.products)
                console.log(response.data.products)
            } else {
                alert('Failed to fetch data, Please try again later.')
            }
        })
    }, [])
    return (
        <div>
        </div>
    )
}

export default LandingPage
