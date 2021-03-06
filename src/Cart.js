import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartitems}) {

    const getTotalPrice = () => {
        let total = 0;
        cartitems.forEach((item) => {
            total += (item.product.price * item.product.quantity)
        })
        return total;
    }

    const getCount = () =>{
        let count = 0;
        // Loop through all the cart items
        cartitems.forEach((item) => {
            // add the quantity of the cart item to total
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <Container>
            <CartItems cartitems={cartitems} />
            <CartTotal getCount = {getCount} getTotalPrice = {getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`