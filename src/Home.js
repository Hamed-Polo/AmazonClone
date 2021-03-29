import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'

function Home() {
    const [product, setProducts] = useState([])
    const [product2, setProducts2] = useState([])

    const getProducts = () => {
        db.collection('product').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc)=> (
            {
                id: doc.id,
                product: doc.data()

            }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(()=>{
        getProducts();
    }, [])
    
    const getProducts2 = () => {
        db.collection('product2').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc)=> (
            {
                id: doc.id,
                product2: doc.data()

            }
            ));
            setProducts2(tempProducts);
        })
    }

    useEffect(()=>{
        getProducts2();
    }, [])

    return (
        <Container>
            <Banner>
            
            </Banner>
            <Content>
                {
                    product.map((data)=>(
                        <Product
                            title = {data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                            id = {data.id}
                        />
                    ))
                }
            </Content>

            <Content2>
            {
                    product2.map((data)=>(
                        <Product
                            title = {data.product2.name}
                            price = {data.product2.price}
                            rating = {data.product2.rating}
                            image = {data.product2.image}
                            id = {data.id}
                        />
                    ))
                }
            </Content2>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/homepage/AAPI/SAH/StopAsianHate_DesktopHero_1500x600_EN._CB657396159_.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(255,255,255,0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`

const Content2 = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 350px;
    display: flex;
    flex: 1;
`