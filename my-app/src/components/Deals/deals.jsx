import React from "react";
import Content from './list'; 
import Cards from './cards';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

function Deals() {
    return (
        <div className="deals my-20 text-center">
            <Link to="/"><h1 className="right-96 text-5xl relative hover:cursor-pointer hover:text-greenyellow inline-flex"><MdOutlineArrowBackIos className='mr-3'/>Deals</h1></Link>
            <h1 className="font-bold text-6xl">Deals</h1>
            <div className="grid grid-cols-2 w-80% m-auto gap-10 mt-20">
                {Content.map((item, index) => {
                    return (
                        <Cards key={index} img={item.img} />
                    );
                })}
            </div>
        </div>
    );
}

export default Deals;
