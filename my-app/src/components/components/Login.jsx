import React from 'react';
import { FaGoogle } from 'react-icons/fa';

function Login() {
    return (
        <div className="login w-[80%] bg-darkgreen text-center m-auto mt-36 mb-36 h-50% p-20 rounded-3xl">
            <h1 className='text-3xl font-bold'>WELCOME!</h1>
            <input 
                type="text" 
                placeholder='Enter Phone Number' 
                className='block mt-10 m-auto w-[70%] text-2xl px-5 py-5 border-b-4 border-green-900 overflow-hidden outline-none' 
            />
            <button
                className='inline-block mt-5 text-center bg-green-900 text-white px-20 py-3 text-2xl font-bold'
            >
                LOGIN
            </button><br />
            <button className='mt-5 m-auto text-center bg-red-400 text-white px-52 pl-5 py-5 text-2xl font-bold flex'>
                <FaGoogle className='mr-40' />LOGIN WITH GOOGLE
            </button>
        </div>
    );
}

export default Login;
