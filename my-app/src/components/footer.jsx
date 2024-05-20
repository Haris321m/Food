import React from 'react'
import logo from './imgs/logo.png'
import playstor from './imgs/download-1.png'
import appstor from './imgs/download-2.png'
import { Link } from 'react-router-dom'

function Footer(){

    return(

        <>
        
            <div className="footer bg-green-900 text-white p-10">
                <div className="top flex justify-center items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="social">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="bottom flex justify-between mt-10 lg:px-20 md:px-10">
                    <div className="about">
                        <div className="ul list-none">
                            <li className='text-2xl font-bold hover:cursor-pointer hover:text-[greenyellow]'>About Us</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Privacy Policy</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Feedback</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Reviews</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Ratings</li>
                        </div>
                    </div>
                    <div className="contect list-none">
                        <div className="ul">
                            <Link to="/contact"><li className='text-2xl font-bold hover:cursor-pointer hover:text-[greenyellow]'>Contact Us</li></Link>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Store Locator</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Track Order</li>
                            <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Terms & Conditions</li>
                        </div>
                    </div>
                    <div className="app lg:flex sm:grid">
                        <img src={playstor} alt="" className='h-10 hover:cursor-pointer'/>
                        <img src={appstor} alt="" className='h-10 lg:ml-5 sm:ml-0 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Footer;