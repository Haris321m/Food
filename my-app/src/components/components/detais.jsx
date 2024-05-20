import React from 'react'

function Details() {

    return (

        <>

            <div className="Details">
                <h1>Add Your Details</h1>
                <div className="name">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Second Name' />
                </div>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Date of birth' />
                <h1>Gender</h1>
                <div className="gender">
                    <input type="radio" /><label htmlFor="">Male</label>
                    <input type="radio" /><label htmlFor="">Female</label>
                    <input type="radio" /><label htmlFor="">Other</label>
                </div>
                <button>Submit</button>
            </div>

        </>

    )

}

export default Details;