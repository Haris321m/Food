import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

function Cards(props){

    return(

        <>
        
            <div className="card bg-darkgreen text-center py-2 rounded-xl relative mt-10 mb-10">
                <FaRegHeart  className='text-3xl right-0 absolute mr-2'/>
                <div className="img flex justify-center items-center mt-9">
                    <img src={props.img} alt="" className='w-52 h-52 overflow-hidden bg-transparent'/>
                </div>
                <div className="text mt-4 mb-4">
                    <h2 className='font-bold'>{props.title}</h2>
                    <p>{props.description}</p>
                    <h2 className='font-bold'>{props.price}</h2>
                </div>
                <button className='bg-green-900 text-white py-2 px-4 rounded-lg absolute left-14 -bottom-5 font-bold'>+ Add Cart</button>
            </div>

        </>

    )

}

export default Cards;