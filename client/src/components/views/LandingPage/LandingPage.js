import Axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {Icon, Col, Row, Card} from 'antd'; 
import ImageSlider from '../../utils/ImageSlider'
const { Meta } = Card; 
// TODO: change slogan

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

    const renderCards = Products.map((product, index)=> {
        return <Col lg={6} md={8} xs={24}>
            <Card hoverable={true} cover={<ImageSlider images={product.images} />}>
                <Meta title={product.title} description={`$${product.price}`}/>
            </Card>
        </Col>
    })


    return (
        <div style={{width: '75%', margin: '3rem auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2>print3d: Making 3D Printing Accessible <Icon type="printer"/></h2>
            </div>

            {/* Filter */}
            {/* Search */}

            {Products.length === 0? 
                <div style={{display: 'flex', height: '300px', justifyContent: 'center', alignItems: "center"}}>
                    <h2>No postings currently...</h2>
                </div>  :
                <div>
                    <Row gutter={[16, 16]}>
                        {renderCards}
                    </Row>
                </div>
             }
            <br /><br /> 
            <div style={{ display:'flex', justifyContent:'center'}}>
                 <button>Load More</button>
            </div>
        </div>
    )
}

export default LandingPage
