import React from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { Link } from 'react-router-dom';


function Contact(){

    return(

        <>
        
            <div className="contect m-20">
                <Link to="/"><h1 className=' text-center font-medium text-3xl hover:cursor-pointer hover:text-greenyellow inline-flex'><MdOutlineArrowBackIos className='mr-3'/> CONTACT US</h1></Link>
                <div className="details mt-10">
                    <h2 className='text-center text-2xl'>Lets Keep in Touch</h2>
                    <form action="submit" className='flex mt-32 w-70% m-auto mb-64 justify-between'>
                        <div className="left list-none w-40%">
                            <li className='text-3xl font-medium'>Our Contacts</li>
                            <li className='text-xl flex mt-8'><SlNotebook className='mr-7 text-6xl'/>diam neque laoreet morbi metus id aliquam</li>
                            <li className='text-xl flex mt-8'><FiPhone className='mr-5 text-4xl'/>00 000 000 0000</li>
                            <li className='text-xl flex mt-8'><MdOutlineMail className='mr-5 text-4xl'/>Info@Gmail.Com</li>
                        </div>
                        <div className="right w-40%">
                            <h1 className='text-3xl mb-10'>Any Questions?</h1>
                            <input type="text" placeholder='Your Name' className='px-3 py-2 text-xl border-black border-2 rounded-2xl w-72'/>
                            <input type="text" placeholder='Email' className='px-3 py-2 text-xl border-black border-2 rounded-2xl mt-5 w-72'/>
                            <textarea name="message" id="message" placeholder='Message' className='px-3 py-2 text-xl border-black border-2 rounded-2xl mt-5 w-72 h-40'></textarea>
                            <button className='text-white text-xl bg-green-900 pl-3 pr-32 py-3 mt-5 rounded-lg'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </>

    )

}

export default Contact;