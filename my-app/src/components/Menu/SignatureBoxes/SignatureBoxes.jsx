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

function SignatureBoxes(){

    return(

        <>
            <h1 className='text-4xl font-bold mt-10'>Signature Boxes</h1>
            <div className="explore grid grid-cols-3 gap-10">
                {Content.map(content)}
            </div>

        </>

    )

}

export default SignatureBoxes;