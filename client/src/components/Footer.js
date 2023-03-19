import { FaHeart, FaRegHeart } from 'react-icons/fa';


import { Link } from 'react-router-dom';
import React from 'react'

export default function Footer(){

    const year = new Date().getFullYear();

    return(
        <footer className="bg-gray-800 py-10 text-gray-400 text-xl lg:px-5 text-center lg:text-left" >
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <img className="mx-auto sm:mx-auto lg:mx-0" src="images/logo.png" style={{width: '3rem', height: '3rem' }} /> 

                    <h3 className='text-2xl font-bold my-5'>About Us</h3>
                    <p className='text-gray-500 mb-8'>A website designed for Cat Lovers. </p>                
                </div>
                <div className="w-full lg:w-1/3 flex-1">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="#">Images</Link>
                    </div>
                    <div>
                        <Link to="/vets">Browse Vets</Link>
                    </div>

                </div>
                <div className="w-full lg:w-1/3">
                    example@gmail.com
                </div>
            </div>

            {/* add copyright */}
            <div className="mt-10 text-center">
                <p className="text-gray-400">© {year} <a className='hover:text-pink-300' href='https://hellenkokach.me/'> Hellen</a>. All rights reserved.</p>
            </div>

        </footer>
    )

}