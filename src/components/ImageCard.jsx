import { 
    Box, 
    Image, 
    // Img 
} from '@chakra-ui/react'
import React from 'react'
// import { motion } from 'framer-motion';


const ImageCard = ({imageURL}) => {
    

    const onImageClick = () => {
        console.log('clicked image')
    }
  return (
    <Box 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        onClick={onImageClick}
        cursor="pointer"
        position="relative"
    >
        <Image src={imageURL} alt='ghana' height='90px' width='130px' />
        {/* <MotionImg
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                w="100%"
                h="100%"
                objectFit="cover"
                src={imageURL}
            /> */}
    </Box>
  )
}

export default ImageCard