import { useEffect, useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function SignIn(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const {email, password} = formData
    const [user,setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        }, []);

    function handleChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    async function login(e){
        e.preventDefault()
        try{
            const user =  await signInWithEmailAndPassword(auth, email, password)
            alert(`You are logged in!`)
            console.log(user)
        }
        catch(error){
            alert(error.message)
            console.log(error.message)
        }

    }


    return (
        <section className='px-5 my-10 '>
        {/* <h1 className='text-6xl font-bold text-center py-5 '>{ user ? user.email : 'Not logged in'}</h1> */}
        <h2 className='text-4xl font-bold text-center py-5 '>Sign In</h2>
        <form onSubmit={login} >
            <FormControl isRequired style={{ width: '75%' }} className='mx-auto pt-10'  >
      
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" name='email' value={email} onChange={handleChange} />
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" name='password' value={password} onChange={handleChange} />
                <small>Don't have an account? <Link to="/signup"> Sign up</Link> </small><br></br>

                <Button type='submit' colorScheme='' className='bg-red-400 hover:bg-red-500' mt={5}>Sign In</Button>

            </FormControl>
        </form>

        </section>

    )

};