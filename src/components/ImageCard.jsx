import React, {useState} from 'react'
import { 
    Box, 
    chakra, 
    Image, 
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';


const ImageCard = ({image, setTotalClicks}) => {
    
    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and the children prop to be forwarded.
         * All other chakra props not matching the motion props will still be forwarded.
         */
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
      });

    const [reveal, setReveal] = useState(false)

    const onImageClick = () => {
        console.log('clicked image with id: ', image.id, ' and tag: ', image.tag)
        // setReveal(true)
        setTotalClicks(prevCount => prevCount+1)
    }
  return (
    <Box 
        // borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        onClick={onImageClick}
        cursor="pointer"
        position="relative"
    >
       
        <ChakraBox
            // animate={{
            //     scale: [1, 2, 2, 1, 1],
            //     rotate: [0, 0, 270, 270, 0],
            //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            //   }}
            // transition={{
            //     duration: 3,
            //     ease: "easeInOut",
            //     repeat: Infinity,
            //     repeatType: "loop",
            // }}
            bgGradient="linear(to-l, #042b3a, #042b3a)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            height='100px'
            width='130px'
        >
            {reveal ?  
                <Image src={image.url} alt='ghana' height='100px' width='130px' />
                :
                <img src='assets/logo.svg' alt='demo ico' /> 
            }
          
        </ChakraBox>
       
    </Box>
  )
}

export default ImageCard