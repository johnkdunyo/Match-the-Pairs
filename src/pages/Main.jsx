import React from 'react'
import { 
    Box, 
    Container, 
    Heading,
    Text,
    SimpleGrid, 
    Spacer,
    Flex,
    Button
} from '@chakra-ui/react'
import Header from '../components/Header'
import ImageCard from '../components/ImageCard'


const Main = () => {
  return (
   <Box minHeight="100vh" display="flex" flexDir="column">
    <Header />
    <Container maxW="xl" mt="95px" flex={1}>
        <Box textAlign="center">
            <Heading as="h4" size="4xl">
                Match-the-Flips
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" mt={2}>
                Got what it takes to win? 🤔  <br/> Let's gooo 🚀
            </Text>
        </Box>

        {/* top bar for score */}
        <Flex mt='60px'>
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Pairs Matched</Text>
                <Text>0/10</Text>
            </Box>
            <Spacer />
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Total Moves</Text>
                <Text>0</Text>
            </Box>
        </Flex>

        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt='10px'>
            <SimpleGrid  m="10px" columns={4} spacingX='15px' spacingY='15px'>
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
                <ImageCard imageURL='assets/ghana.png'/>
                <ImageCard imageURL='assets/usa.png' />
            </SimpleGrid>
        </Box>
        
        <Flex mt='10px'>
            <Button
                size='md'
                height='48px'
                width='200px'
            >
            Reset Game
            </Button>
            <Spacer />
            <Button
                size='md'
                height='48px'
                width='200px'
            >
            Restart Game
            </Button>
        </Flex>
        
    </Container>


   </Box>
  )
}

export default Main