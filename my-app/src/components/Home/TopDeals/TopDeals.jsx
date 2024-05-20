import React from 'react'
import Content from './list.js'
import Cards from './cards.jsx'

function content(status) {

    return (

        <Cards
            img={status.img}
        />

    )

}

function TopDeals() {

    return (

        <>

            <div className='text-center mt-20'>
                <h1 className='text-5xl font-[roboto] font-bold border-b-8 border-green-900 pb-3 inline-block'>TOP DEALS</h1>
                <div className="TopDeals grid grid-cols-2 gap-10 px-20  mt-20">
                    {Content.map(content)}
                </div>
            </div>

        </>

    )

}

export default TopDeals;