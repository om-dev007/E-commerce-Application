import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../utils/api'
import {useCart} from '../store/cartStore'

const ProductDetail = () => {
    const id = useParams()
    const [product, setProduct] = useState(null)
    const addToCart = useCart(state => state.addToCart)

    useEffect(() => {
        const loadProduct = async () => {
            const res = await api.get(`/product/${id}`)
            setProduct(res.data)
        }
        loadProduct()
    } , [id])

    if(!product) {
        return <h2>Loading...</h2>
    }

  return (
    <div>
        <img src={product.image} alt="" />
        <h1> {product.title} </h1>
        <p> {product.descreption} </p>
        <h2>$ {product.price} </h2>
        <button onClick={() => addToCart(product) }>Add to Cart</button>
    </div>
  )
}

export default ProductDetail