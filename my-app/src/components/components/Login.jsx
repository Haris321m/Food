import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Otp from './otp'; // Ensure correct path to the Otp component
import Details from './Details'; // Ensure correct path to the Details component

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handleLogin = () => {
        if (phoneNumber.trim() !== '') {
            setShowOtp(true);
        } else {
            // Handle case where phone number is empty
            alert("Please enter a phone number");
        }
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCloseOtp = () => {
        setShowOtp(false);
    };

    const handleVerifyOtp = () => {
        setShowOtp(false);
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div className="login w-[80%] bg-darkgreen text-center m-auto mt-36 mb-36 h-50% p-20 rounded-3xl relative">
            <h1 className='text-3xl font-bold'>WELCOME!</h1>
            {!showOtp && !showDetails ? (
                <>
                    <input 
                        type="text" 
                        placeholder='Enter Phone Number' 
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='block mt-10 m-auto w-[70%] text-2xl px-5 py-5 border-b-4 border-green-900 overflow-hidden outline-none' 
                    />
                    <button
                        className='inline-block mt-5 text-center bg-green-900 text-white px-20 py-3 text-2xl font-bold'
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button><br />
                    <button className='mt-5 m-auto text-center bg-red-400 text-white px-52 pl-5 py-5 text-2xl font-bold flex'>
                        <FaGoogle className='mr-40' />LOGIN WITH GOOGLE
                    </button>
                </>
            ) : showOtp ? (
                <>
                    <div className="black-layer fixed inset-0 bg-black opacity-50"></div>
                    <Otp phoneNumber={phoneNumber} onClose={handleCloseOtp} onVerify={handleVerifyOtp} />
                </>
            ) : (
                <Details onClose={handleCloseDetails} />
            )}
        </div>
    );
}

export default Login;
