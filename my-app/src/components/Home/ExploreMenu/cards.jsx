import React from "react";

function Cards(props){

    return(

        <>
        
            <div className="card">
                <div className="img flex justify-center items-center text-center">
                    <img src={props.img} alt="" />
                </div>
                <div className="title flex justify-center items-center text-center">
                    <h1>{props.title}</h1>
                </div>
            </div>

        </>

    )

}

export default Cards;