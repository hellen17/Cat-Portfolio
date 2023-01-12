import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'


export default function SignUp(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''

    })

    const {firstName, lastName, email, password, confirmPassword} = formData

    function handleChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        alert(`Thank you ${firstName} for signing up!`)
    }

    return (
        <section className='px-5 my-10 '>
        <h2 className='text-4xl font-bold text-center py-5 '>Sign Up Form</h2>
        <form onSubmit={handleSubmit} >
            <FormControl isRequired style={{ width: '75%' }} className='mx-auto pt-10'  >
                <div className='lg:flex'>
                    <div className='flex-1 mr-5'>
                        <FormLabel>First name</FormLabel>
                        <Input type='text' placeholder='First name' name='firstName' value={firstName} onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <FormLabel>Last name</FormLabel>
                        <Input type='text' placeholder='Last name' name='lastName' value={lastName} onChange={handleChange} />
                    </div>
                </div>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" name='email' value={email} onChange={handleChange} />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" name='password' value={password} onChange={handleChange} />
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" placeholder="Confirm your password" name='confirmPassword' value={confirmPassword} onChange={handleChange} />

                <Button type='submit' colorScheme='' className='bg-red-400 hover:bg-red-500' mt={5}>Sign Up</Button>
            </FormControl>
        </form>

        </section>

    )

};