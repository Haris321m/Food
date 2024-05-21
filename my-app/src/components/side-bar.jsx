import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { ImTarget } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function SideBar({ isVisible }) {
    return (
        <div className={`SideBar pt-10 w-20% bg-white top-0 h-full fixed z-10 ${isVisible ? '' : 'hidden'}`}>
            <div className="btn ml-10 pb-5">
                <Link to='/login'><button className='py-3 px-6 bg-green-900 text-white text-xl rounded-xl hover:cursor-pointer hover:bg-darkgreen'>Login</button></Link>
            </div>
            <div className="customer border-y-2 border-black py-10 px-5">
                <ul className='list-none'>
                    <li className='mt-5 lg:text-2xl md:text-md font-medium flex hover:cursor-pointer hover:text-darkgreen'><CiLocationOn className='lg:text-3xl md:text-md mr-5'/> Store Locator</li>
                    <li className='mt-5 lg:text-2xl md:text-md font-medium flex hover:cursor-pointer hover:text-darkgreen'><ImTarget className='lg:text-3xl md:text-md mr-5'/>Track Order</li>
                    <Link to="/menu"><li className='mt-5 lg:text-2xl md:text-md font-medium flex hover:cursor-pointer hover:text-darkgreen'><TfiMenuAlt className='lg:text-3xl md:text-md mr-5'/>Explore Menu</li></Link>
                </ul>
            </div>
            <div className="about-us py-10 px-5">
                <ul className='list-none'>
                    <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>About us</li><br />
                    <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>Feedback</li><br />
                    <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>Terms & Conditions</li><br />
                    <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>Privacy Policy</li><br />
                    <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>contact us</li><br />
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
