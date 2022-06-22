import React from 'react'
import { Box, Flex, Spacer, Text, Progress } from '@chakra-ui/react'


const ScoreBar = ({totalClicks, totalMatched}) => {
  return (
    <Flex mt='60px'>
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
              <Progress size='sm' value={totalMatched*12.5} colorScheme='blue'  />
                <Text>Pairs Matched</Text>
                <Text>{totalMatched}/8</Text>
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