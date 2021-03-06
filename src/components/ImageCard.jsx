import React, {useEffect, useState} from 'react'
import { 
    Box, 
    chakra, 
    Image, 
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';


const ImageCard = ({card, index, onCardClick, matchedCards, setTotalClicks }) => {
    
    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and the children prop to be forwarded.
         * All other chakra props not matching the motion props will still be forwarded.
         */
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
      });

    const [reveal, setReveal] = useState(()=> matchedCards.includes(index) ? true : false)
    


    


 

    const onImageClick = () => {
        // console.log('clicked image with id: ', card.id, ' and index: ', index)
        // setReveal(true)
        setTotalClicks(prevCount => prevCount+1)
        onCardClick(index)

       
        setTimeout(()=>{
            setReveal(true)
        }, 2000)
          
        
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
       
        <ChakraBox
            bgGradient="linear(to-l, #042b3a, #042b3a)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            height='100px'
            width='130px'
        >
            {(matchedCards.length > 0 && matchedCards.includes(index)) ?  
                <Image src={card.url} alt='ghana' height='100px' width='130px' />
                :
                <img src='assets/logo.svg' alt='demo iconn' /> 
            }
          
        </ChakraBox>
       
    </Box>
  )
}

export default ImageCard