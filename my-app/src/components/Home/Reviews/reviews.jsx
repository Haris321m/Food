import React from 'react'
import Content from './list.js'
import Cards from './cards.jsx'

function content(status){

    return(
        <Cards 
            img = {status.img}
            name = {status.name}
            review = {status.review}
        />
        
    )

}

function Reviews(){

    return(

        <>
            <div className='text-center mt-32 text-5xl font-[roboto] '>
                <h1 className='font-bold inline-block'>OUR CUSTOMER REVIEWS</h1>
            </div>
            <div className="reviews grid grid-cols-3 gap-10 px-20 py-10 ">
                {Content.map(content)}
            </div>

        </>

    )

}

export default Reviews;