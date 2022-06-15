import { Box } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Card = () => {
    const MotionImg = motion.custom(Img);
  return (
    <>
        <Box
            onClick={() => onImageClick(post)}
            cursor="pointer"
            h="240px"
            position="relative"
            overflow="hidden"
        >
            <MotionImg
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                w="100%"
                h="100%"
                objectFit="cover"
                src={post.src}
            />
        </Box>
    </>
  )
}

export default Card