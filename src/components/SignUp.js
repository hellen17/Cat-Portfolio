import { useEffect, useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import { db, auth } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { async } from '@firebase/util';

export default function SignUp(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
       
    })
    const {firstName, lastName, email, password, confirmPassword} = formData
    const usersCollectionRef = collection(db, 'users')
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

    async function handleSubmit(e){
        e.preventDefault()
        //validate form data
        if(password !== confirmPassword){
            alert('Passwords do not match')
            return
        }
        //send data to firebase
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: firstName
            })
            alert(`Thank you ${firstName} for signing up!`)
            console.log(user)
            console.log(user.displayName)
            console.log(auth.currentUser.displayName)
            console.log(auth.currentUser.email)
        }
        catch(e){
            alert(e.message)
            console.error('Error adding document: ', e)
        }
    }



    // async function handleSubmit(e){
    //     e.preventDefault()
    //     //validate form data
    //     if(password !== confirmPassword){
    //         alert('Passwords do not match')
    //         return
    //     }
    //     //send data to firebase
    //     try{
    //         const docRef = await addDoc(usersCollectionRef, {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email, 
    //             password: password,
    //             confirmPassword: confirmPassword       
    //         })
    //         alert(`Thank you ${firstName} for signing up!`)

    //         console.log('Document written with ID: ', docRef.id);
    //     }
    //     catch(e){
    //         console.error('Error adding document: ', e);
    //     }
       
    //     console.log(formData)
    // }



    return (
        <section className='px-5 my-10 '>
        <h2 className='text-4xl font-bold text-center py-5 '>Sign Up</h2>
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
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" name='password' value={password} onChange={handleChange} />
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" placeholder="Confirm your password" name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <small>Already have an account? <Link to="/signin"> Log in</Link> </small> <br></br>

                <Button type='submit' colorScheme='' className='bg-red-400 hover:bg-red-500' mt={5}>Sign Up</Button>

            </FormControl>
        </form>

        </section>

    )

};