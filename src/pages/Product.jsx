import React from 'react'
import { api } from '../utils/api'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const data = async () => {
            setIsLoading(true)
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
                {isLoading ? (<div className="flex h-screen w-full items-center justify-center">
                    <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin" />
                </div>) : 
                    products.map((item) => {
                        return (
                            <ProductCard item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product