import {useState} from 'react'

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
        firstName : '',
        lastName : '',
        email : ''
    })

    function handleChange(e){
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        alert('Thank you for subscribing!')
        
        // Reset the form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
          })
    }

    return (
        <section className='px-5 my-10 '>
            <h2 className='text-4xl font-bold text-center py-5 '>Join our Newsletter</h2>
            <form onSubmit={handleSubmit} >
            <FormControl isRequired style={{ width: '75%' }} className='mx-auto pt-10'  >
                <div className='flex'>
                    <div className='flex-1 mr-5'>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' name='firstName' value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' name='lastName' value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <Button type='submit' colorScheme='' className='bg-red-400' mt={5}>Submit</Button>
            </FormControl>
            </form>

        </section>

              
    )
}