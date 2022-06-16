import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'


const ScoreBar = ({totalClicks}) => {
  return (
    <Flex mt='60px'>
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Pairs Matched</Text>
                <Text>0/8</Text>
            </Box>
            <Spacer />
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Total Moves</Text>
                <Text>{totalClicks}</Text>
            </Box>
    </Flex>
  )
}

export default ScoreBar