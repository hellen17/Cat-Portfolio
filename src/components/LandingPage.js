import React from 'react';
import { Navbar } from './Navbar';
import GetImages from './GetImages';
import Form from './Form';
import Footer from './Footer';
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function LandingPage() {
    return (

        <>
            <div className='mx-auto'>
                {/* Heroshot section */}
                <section className="grid lg:grid-cols-2 bg-red-200 px-5">
                    <div className="md:w-full mx-auto">
                        <img className='rounded text-center' src='images/heroshot.png' alt='Cat' />
                    </div>
                    <div className="text-left lg:p-32 p-8">
                        <h1 className="text-4xl font-bold pb-5">Designed for Cat Lovers</h1>
                        <p className="text-2xl">Our furbabies come in all shape colors and sizes and deserve to be admired.</p>
                        <Button colorScheme='' className='mt-5 bg-red-400 hover:bg-red-500' >Get Started</Button>

                    </div>
                </section>
                {/* Heroshot section end */}
            <GetImages />
            <Form />
            <Footer />
            </div>
        </>
      
    )

}