import { useState } from "react"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import vetData from "../vetData"
import { Button } from '@chakra-ui/react'
import { Link } from 'react-scroll';


console.log(vetData)

export default function DisplayVets() {

    const [query, setQuery] = useState("")
    console.log(query)
    const q = query.toLowerCase()

    const cities = [...new Set(vetData.map((vet) => vet.city))];


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
            <option>City</option>

            {cities.map((city, index) => {
                return (
                    <option value={city} key={index}>{city}</option>
                )
            }
            )}
            </select>
        </div>
  

                

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            
                {vetData
                .filter(val =>
                    (query === "") ||
                    (Array.isArray(val.name) && val.name.some(name => name.toLowerCase().includes(q))) ||
                    (typeof val.clinicName === "string" && val.clinicName.toLowerCase().includes(q)) ||
                    (typeof val.city === "string" && val.city.toLowerCase().includes(q)) ||
                    (typeof val.location === "string" && val.location.toLowerCase().includes(q))
                )           
                .map((vet, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md rounded-lg p-5'>
                            <h3 className='text-xl font-bold'>
                                {vet.name.map((name, index) => {
                                    return (
                                        <span key={index}>
                                            <p>{name.split(" ").join(" ")}</p>
                                        </span>
                                    )
                                }
                                )}
                            </h3>
                            <p className='text-md font-semibold text-pink-400'>{vet.clinicName}</p>
                            <p className='text-md'>{vet.city}</p>
                            <p className='text-md'>{vet.location}</p>
                            <p className='text-md'>{vet.phone.map((phone, index) => {
                                return (
                                    <span key={index}>
                                    <p className="flex gap-2"> <FaPhone/>{phone.split(" ").join(" ")}</p>
                                    </span>
                                )
                            }
                            )}</p>

                            <p className='text-md flex items-center gap-2'>{vet.email && <FaEnvelope /> }{vet.email}</p>
                        </div>

                
                    )
                }
                )}
            </div> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Names</th>
                            <th>City</th>
                            <th>Location</th>
                            <th>Clinic Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {vetData
                            .filter(val =>
                                (query === "") ||
                                (Array.isArray(val.name) && val.name.some(name => name.toLowerCase().includes(q))) ||
                                (typeof val.clinicName === "string" && val.clinicName.toLowerCase().includes(q)) ||
                                (typeof val.city === "string" && val.city.toLowerCase().includes(q)) ||
                                (typeof val.location === "string" && val.location.toLowerCase().includes(q))
                            )           
                            .map((vet, index) => {
                                return (
                                    <tr key={index}>
                                        <td></td>
                                        <td>
                                            {vet.name.map((name, index) => (
                                                <span key={index}>
                                                    <p>{name.split(" ").join(" ")}</p>
                                                </span>
                                            ))}
                                        </td>
                                        <td>{vet.city}</td>
                                        <td>{vet.location}</td>
                                        <td>{vet.clinicName}</td>
                                        <td>
                                            {vet.phone.map((phone, index) => (
                                                <span key={index}>
                                                    <p className="flex gap-2">{phone.split(" ").join(" ")}</p>
                                                </span>
                                            ))}
                                        </td>
                                        <td>{vet.email}</td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </section>
        </div>
    )
}