import React from "react";

function Cards(props){

    return(

        <>
            <div>
                <img src={props.img} alt="" className="w-100%"/>
            </div>
        </>

    )

}

export default Cards;