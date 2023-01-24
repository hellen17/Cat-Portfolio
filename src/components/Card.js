import {useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Image, Button } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';


export default function CatCards({name, age, color, url, breed}){
    const [liked, setLiked] = useState(false)

    let likedCats = JSON.parse(localStorage.getItem('likedCats')) || []

    const handleClick = () => {
        setLiked(!liked)
        //add liked image to local storage
        if (liked){
            likedCats = likedCats.filter(cat => cat.name !== name)
        }
        else{
            likedCats.push({name, age, color, url, breed, liked:true})
        }
        localStorage.setItem('likedCats', JSON.stringify(likedCats))
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
                {/* <span onClick={handleClick}>{liked ? <FaHeart /> : <FaRegHeart />}</span> */}
                <span onClick={handleClick}>
                {likedCats.find(cat => cat.name === name && cat.age === age && cat.color === color && cat.url === url && cat.breed === breed)?.liked ? <FaHeart color='red' size={20} /> : <FaRegHeart size={20} />}
                </span>
               

                {/* <Button onClick={handleClick}>Like</Button>  */}
            </CardBody>
        </Card>

       
    )
}



