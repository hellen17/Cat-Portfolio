import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'


export default function Form(){
    return (
        <section className='px-5 my-10 '>
            <h2 className='text-4xl font-bold text-center py-5 '>Join our Newsletter</h2>
            <FormControl isRequired style={{ width: '75%' }} className='mx-auto pt-10' >
                <div className='flex'>
                    <div className='flex-1 mr-5'>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                    </div>
                    <div className='flex-1'>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                    </div>
                </div>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <Button type='submit' colorScheme='' className='bg-red-400' mt={5}>Submit</Button>
            </FormControl>

        </section>

              
    )
}