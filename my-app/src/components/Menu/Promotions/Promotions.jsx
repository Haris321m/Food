import  React from 'react'
import Content from './list'
import Cards from './cards'

function content(status){

    return(

        <Cards 
        
            img = {status.img}
            title = {status.title}
            description = {status.description}
            price = {status.price}

        />

    )

}

function Promotions(){

    return(

        <>
            <h1 className='text-4xl font-bold mt-10'>Promotions</h1>
            <div className="explore grid grid-cols-3 gap-10">
                {Content.map(content)}
            </div>

        </>

    )

}

export default Promotions;