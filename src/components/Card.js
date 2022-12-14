import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Image, Button } from '@chakra-ui/react'

export default function CatCards({name, age, color, url, breed}){
 
    return (

        <Card className='shadow-lg'>
            <CardHeader>
                <Image
                    objectFit='cover'
                    src={url}
                    alt={name}
                />
            </CardHeader>
            <CardBody>
                <Heading size='md' className='pb-5 text-red-500'>{name}</Heading>
                <Text>Age: {age}</Text>
                <Text>Color: {color}</Text>
                <Text>Breed: {breed}</Text>
            </CardBody>
        
        </Card>
    )
}



