import {useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Image, Button } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';


export default function CatCards({name, age, color, url, breed}){

    const [liked, setLiked] = useState(false)


    const handleClick = () => {
        setLiked(!liked)
    }

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
                <span onClick={handleClick}>{liked ? <FaHeart /> : <FaRegHeart />}</span>
               

                {/* <Button onClick={handleClick}>Like</Button>  */}
            </CardBody>
        </Card>
    )
}



