import React from 'react'
import { api } from '../utils/api'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
  const [products, setProducts] = useState([])
    useEffect(() => {
        const data = async () => {
            try {
                const raw = await api.get("/products")
                console.log(raw.data);
                setProducts(raw.data)
            } catch (error) {
                console.log(error);
            }
        }

        data()  
    }, [])
  return (
    <>
        <div className='flex flex-wrap gap-5'>
            {products.map((item) => {
                return (
                    <ProductCard item={item} />
                )
            })}
        </div>
    </>
  )
}

export default Product