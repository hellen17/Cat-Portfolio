import { useState } from "react"
import { useEffect } from "react";
import { Button } from '@chakra-ui/react'
import { Link } from 'react-scroll';
import VetTable from "../components/VetTable";


export default function DisplayVets() {

    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    console.log('data', data)

    console.log(query)
    const cities = [...new Set(data.map((vet) => vet.city))];

    useEffect(() => {
        const fetchVetData = async () => {
            const response = await fetch("https://purrfecthealth.netlify.app/.netlify/functions/fetch-data")
            const data = await response.json()
            setData(data)
        }
        fetchVetData()

    }, [])



    return(
        <div>
            <section className="hero min-h-screen" style={{ backgroundImage: `url("/images/cat-vet.jpg")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                    Find a Vet Near You
                </h1>
                <p className="mb-5 text-xl">
                    We have a list of vet clinics in Kenya. You can search by city or name.
                </p>
                <Button colorScheme='' className='mt-5 bg-red-400 hover:bg-red-500' >
                    <Link to='search' smooth={true} >
                        Browse
                    </Link>
                    </Button>

                </div>
            </div>
            </section>

        <section id="search" className='px-5 my-10'>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
            <input type="text" placeholder="Search.." className="w-full lg:w-3/4 mb-5 border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-pink-400"
              onChange={(e)=> setQuery(e.target.value)}
             /> 

            <select
            id="cities"
            className="w-full lg:w-1/4 mb-5 border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-pink-400"
            onChange={(e)=> setQuery(e.target.value)}
            >
            <option selected disabled>City</option>

            {cities.map((city, index) => {
                return (
                    <option value={city} key={index}>{city}</option>
                )
            }
            )}
            </select>
        </div>
                 

        <VetTable vetData={data} query={query} />
          

        </section>
        </div>
    )
}