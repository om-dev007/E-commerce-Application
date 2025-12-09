import React from 'react'
import Navbar from '../components/Navbar'
import Toast from "../components/Toast";
import { useState } from 'react'

const Login = () => {

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const [toasts, setToasts] = useState([]);

    const showToast = (message, type) => {
        const id = Date.now();

        setToasts(prev => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 3000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };


    const commonHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const formHandler = (e) => {
        e.preventDefault();

        if (!input.email.includes("gmail.com") ||
            (!/\d/.test(input.password) && !input.password.includes("@"))) {
            showToast("Please enter a valid value", "error");
            return;
        }

        showToast("Login Successful!", "success");

        setInput({
            email: '',
            password: ''
        });
    };


    return (
        <> <Navbar />
            <div className='h-screen bg-linear-to-b from-green-300 to-white flex items-center justify-center '>
                <div>
                    <form onSubmit={formHandler} className='border w-150 bg-white rounded-2xl border-gray-400 px-5 py-2'>
                        <div className='mt-5'>
                            <h1 className='font-bold text-3xl text-center text-gray-600'>Login</h1>
                        </div>
                        <div className='input-sec mb-10 gap-5 px-5 py-5 text- justify-center flex flex-col'>
                            <div>
                                <input name='email' value={input.email} onChange={(e) => commonHandler(e)} className='border w-full border-gray-500 px-4 py-2 outline-0 rounded' type="email" placeholder='Enter your email address...' />
                            </div>
                            <div>
                                <input name='password' value={input.password} onChange={(e) => commonHandler(e)} className='border w-full border-gray-500 px-4 py-2 outline-0 rounded' type="text" placeholder='Enter your password here...' />
                            </div>
                            <div>
                                <button type='submit' className='bg-green-500 text-white px-5 py-2 w-full cursor-pointer hover:scale-101 transition-all outline-0 rounded'>Login</button>
                            </div>
                        </div>
                    </form>
                    <div>

                    </div>
                </div>
                <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
                    {toasts.map(t => (
                        <Toast
                            key={t.id}
                            message={t.message}
                            type={t.type}
                            onClose={() => removeToast(t.id)}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Login