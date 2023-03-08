import catData from '../mockdata/catData.js'
import CatCards from './Card'


export default function GetImages() {

    console.log(catData)

    return (
        <section className='px-5 my-10'>
        <h2 className='text-4xl font-bold text-center py-5'>Meet Our Furbabies</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {catData.map((cat, index) => {
                    return (
                        <CatCards key={index} name={cat.name} age={cat.age} color={cat.color} url={cat.url} breed={cat.breed} />
                    )
                })}      
            </div>
        </section>

    )
}