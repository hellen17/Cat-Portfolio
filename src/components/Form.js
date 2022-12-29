import {useState} from 'react'
import axios from 'axios'

import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'



export default function Form(){

    const [formData, setFormData] = useState({
        "records": [
            {
                "fields" : {
                    "firstName" : '',
                    "lastName" : '',
                    "email" : ''
                }
            }
        ]
    })

    const firstName = formData.records[0].fields.firstName
    const lastName = formData.records[0].fields.lastName
    const email = formData.records[0].fields.email


    function handleChange(e){
        const {name,value} = e.target
        // setFormData({
        //     ...formData,
        //     [name] : value
        // })
        setFormData({
            ...formData,
            records: [
                {
                    fields: {
                        ...formData.records[0].fields,
                        [name] : value
                    }
                }
            ]
    })
}

    async function handleSubmit(e){
        e.preventDefault()
    
        //send data to airtable
        try {
            const response = await axios.post('https://api.airtable.com/v0/appm1rsvExrqtPNUp/Newsletter', formData, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)

            if (response.status === 200) {
                alert(`Thank you ${firstName} for subscribing!`)
                console.log(response)
                  // Reset the form
                  setFormData({
                    "records": [
                        {
                            "fields" : {
                                "firstName" : '',
                                "lastName" : '',
                                "email" : ''
                            }
                        }
                    ]
                  });

            }
        } catch (error) {
            alert('Failed to subscribe. Please try again.')
            console.log(error.response)
        }

    
    }

    return (
        <section className='px-5 my-10 '>
            <h2 className='text-4xl font-bold text-center py-5 '>Join our Newsletter</h2>
            <form onSubmit={handleSubmit} >
                <FormControl isRequired style={{ width: '75%' }} className='mx-auto pt-10'  >
                    <div className='lg:flex'>
                        <div className='flex-1 mr-5'>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' name='firstName' value={firstName} onChange={handleChange} />
                        </div>
                        <div className='flex-1'>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' name='lastName' value={lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email" name='email' value={email} onChange={handleChange} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <Button type='submit' colorScheme='' className='bg-red-400 hover:bg-red-500' mt={5}>Submit</Button>
                </FormControl>
            </form>

        </section>

              
    )
}