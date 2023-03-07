import { FaPaw, FaSyringe } from "react-icons/fa"
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <section className='px-5 my-10 pb-10'>
        <h2 className='text-4xl font-bold text-center py-5'>What We Do</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 text-center'>
            <div className='rounded-lg p-5 lg:w-3/4 bg-white border border-pink-300'>
                <div className="flex justify-center">
                    <FaSyringe className="text-6xl animate-bounce text-white bg-emerald-200 shadow-lg shadow-emerald-300 p-2 rounded-full" />
                </div>                        
                <h3 className='text-2xl font-bold mt-3'>Find a Vet</h3>
                <p className='text-xl mt-3'>We have a list of vet clinics in Kenya. You can search by city or name.</p>
                <Button colorScheme='' className='mt-5 bg-red-400 hover:bg-red-500' ><Link to='/vets'>Browse</Link></Button>
            </div>
            <div className="rounded-lg p-5 lg:w-3/4 bg-white border border-pink-300">
                <div className="flex justify-center">
                    <FaPaw className='text-6xl animate-bounce text-white bg-orange-200 shadow-lg shadow-orange-300 p-2 rounded-full' />
                </div>
                <h3 className='text-2xl font-bold mt-3'>Browse our Images</h3>
                <p className='text-xl mt-3'>
                    View our gallery of cat images. You can also upload your own cat images
                </p>
                <Button colorScheme='' className='mt-5 bg-red-400 hover:bg-red-500' ><Link to='/sitters'>Browse</Link></Button>
            </div>
            
        </div>
        </section>  
    )
}