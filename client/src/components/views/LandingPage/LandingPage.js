import Axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {Icon, Col, Row, Card} from 'antd'; 
import ImageSlider from '../../utils/ImageSlider'
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox'; 

const { Meta } = Card; 
// TODO: change slogan

function LandingPage() {
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        category: [], 
        price: []
    })
    useEffect(() => {
        const variables = {
            skip: Skip, 
            limit: Limit, 
        }

        getProducts(variables)
    }, [])

    const getProducts = (variables)=>{
        Axios.post('/api/product/getProducts', variables)
        .then(response => {
            if(response.data.success) {
                if(variables.loadMore){
                    setProducts([...Products, ...response.data.products])
                } else {
                    setProducts(response.data.products)
                }
                setPostSize(response.data.postSize)
                console.log(response.data.products)
            } else {
                alert('Failed to fetch data, Please try again later.')
            }
        })
    }
    const onLoadMore= ()=>{
         let skip = Skip + Limit;
         const variables = {
             skip: Skip, 
             limit: Limit,
             loadMore: true 
         }
         getProducts(variables)
         setSkip(skip)
    }

    const renderCards = Products.map((product, index)=> {
        return <Col lg={6} md={8} xs={24}>
            <Card hoverable={true} cover={<ImageSlider images={product.images} />}>
                <Meta title={product.title} description={`$${product.price}`}/>
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {
        const variables = {
            skip: 0, 
            limit: Limit,
            filters: filters 
        }

        getProducts(variables)
        setSkip(0)
    }

    const handleFilters = (filters, category) => {
        const newFilters = {...Filters}
        newFilters[category] = filters
        if(category === "price"){
            
        }
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    return (
        <div style={{width: '75%', margin: '3rem auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2>print3d: Making 3D Printing Accessible <Icon type="printer"/></h2>
                <br /><br />
            </div>

            {/* Filter */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox 
                    handleFilters={filters => handleFilters(filters, "categories")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox 
                    handleFilters={filters => handleFilters(filters, "price")}
                    />    
                </Col>
            </Row>
            
            {/* Search */}
            <br /><br />
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
            {PostSize >= Limit &&
                <div style={{ display:'flex', justifyContent:'center'}}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }
            
        </div>
    )
}

export default LandingPage
