import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    
    const getData = async () => {
      const data = await axios.get('https://fakestoreapi.com/products')
      console.log(data.data);
    }

    getData()
  }, [])
  return (
    <div className='bg-gray-900 h-screen'>App</div>
  )
}

export default App