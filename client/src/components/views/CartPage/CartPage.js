import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock'
import {Result, Empty} from 'antd'
import Paypal from '../../utils/Paypal'
import Axios from 'axios';

function CartPage(props) {
    const dispatch = useDispatch()
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    
    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }

    }, [props.user.userData])

    useEffect(() => {
        if(props.user.cartDetail && props.user.cartDetail.length > 0) {
            calculateTotal(props.user.cartDetail)
        }
    },  [props.user.cartDetail])

    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotal(total)
        setShowTotal(true)
    }

    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    setShowTotal(false)
                } else {
                    calculateTotal(response.payload.cartDetail)
                }
            })
    }

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            cartDetail: props.user.cartDetail,
            paymentData: data
        }))
            .then(response => {
                if (response.payload.success) {
                    setShowSuccess(true)
                    setShowTotal(false)
                }
            })
    }

    const transactionError = () => {
        alert("Paypal Error")
    }

    const transactionCancel = () => [
        alert('Transaction Cancelled')
    ]

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Cart</h1>
            <div>
                { ShowTotal &&
                <UserCardBlock
                    products={props.user.cartDetail}
                    removeItem={removeFromCart}
                />
                }

                { ShowTotal ? 
                    <div style={{ marginTop: '3rem' }}>
                        <h2>Total amount: $ {Total}</h2>
                    </div>
                    :  
                    ShowSuccess ?
                        <Result
                            status="success"
                            title="Successfully Purchased Items"
                        /> : 
                        <div style={{
                            width: '100%', display: 'flex', flexDirection: 'column',
                            justifyContent: 'center'
                        }}>

                        <br />
                        <Empty description={false}/>
                        <p>Cart is Empty!</p>
                        </div>
                }

            </div>
                {ShowTotal && 
                    <Paypal 
                    toPay={Total}
                    onSuccess={transactionSuccess}
                    onError={transactionError}
                    onCancel={transactionCancel}
                />}
               
        </div>
    )
}

export default CartPage
