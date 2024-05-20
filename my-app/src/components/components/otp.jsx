import React from 'react'

function Otp(){

    return(

        <>
        
            <div className="otp">
                    <button></button>
                    <h1>ADD OTP</h1>
                    <p>Please enter the OTP sent to your mobile number</p>
                    <p>{}</p>
                    <input type="text" name="number" id="first" />
                    <input type="text" name="number" id="second" />
                    <input type="text" name="number" id="third" />
                    <input type="text" name="number" id="fourth" />
                    <p>{}</p>
                    <p>Didn't receive OTP?</p><button>Resend</button>
                    <button>VERIFY</button>
            </div>

        </>

    )

}

export default Otp;