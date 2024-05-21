import React, { useState } from 'react';

function Otp({ phoneNumber, onClose, onVerify }) {
    const [otp, setOtp] = useState(new Array(4).fill(''));

    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }

    function clearOtp() {
        setOtp(new Array(4).fill(''));
    }

    return (
        <>
            <div className="otp bg-gray-100 p-8 rounded-lg text-center relative">
                <h1 className="text-3xl font-bold mb-4">ADD OTP</h1>
                <p className="mb-4">Please enter the OTP sent to your mobile number: {phoneNumber}</p>
                <div className="flex justify-center space-x-4 mb-4">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            name="number"
                            value={data}
                            onChange={(e) => handleChange(e, index)}
                            maxLength={1}
                            className="w-12 h-12 text-3xl border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-center"
                        />
                    ))}
                </div>
                <button
                    className="absolute top-2 right-2 text-gray-600"
                    onClick={() => {
                        clearOtp();
                        onClose();
                    }}
                >
                    &#x2716;
                </button>
                <p className="mb-4">Didn't receive OTP?</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Resend</button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={onVerify}
                >
                    VERIFY
                </button>
            </div>
        </>
    );
}

export default Otp;
