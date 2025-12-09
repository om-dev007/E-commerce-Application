import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <> <Navbar />
            <div className='h-screen bg-linear-to-b from-green-300 to-white flex items-center justify-center '>
                <div>
                    <form  className='border w-150 bg-white rounded-2xl border-gray-400 px-5 py-2'>
                        <div className='mt-5'>
                            <h1 className='font-bold text-3xl text-center text-gray-600'>Login</h1>
                        </div>
                        <div className='input-sec mb-10 gap-5 px-5 py-5 text- justify-center flex flex-col'>
                            <div >
                                <input className='border w-full border-gray-500  px-4 py-2 outline-0 rounded' type="text" placeholder='Enter your name...' />
                            </div>
                            <div>
                                <input className='border w-full border-gray-500 px-4 py-2 outline-0 rounded' type="text" placeholder='Enter your email address...' />
                            </div>
                            <div>
                                <input className='border w-full border-gray-500 px-4 py-2 outline-0 rounded' type="text" placeholder='Enter your password here...' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login