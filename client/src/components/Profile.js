import {useState} from 'react'
import CatCards from './Card'

export default function Profile(){ 
    const likedCats = JSON.parse(localStorage.getItem('likedCats')) || []
    

    return (
        <div>
        <h2 className='text-4xl font-bold text-center py-5'>Liked Images</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {likedCats.map((cat, index) => {
                return (
                    <CatCards key={index} name={cat.name} age={cat.age} color={cat.color} url={cat.url} breed={cat.breed} />
                )
            })}
            </div>
       
        </div>
    )
}
