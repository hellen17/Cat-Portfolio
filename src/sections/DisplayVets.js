import vetData from "../vetData"

console.log(vetData)

export default function DisplayVets() {

    return(
        <section className='px-5 my-10'>
        <h2 className='text-4xl font-bold text-center py-5'>Vets  </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
              {vetData.map((vet, index) => {
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
                                    <p>{phone.split(" ").join(" ")}</p>
                                </span>
                            )
                        }
                        )}</p>

                        <p className='text-md'>{vet.email}</p>
                    </div>
                )
              }
            )}
            </div>
        </section>

    )
}